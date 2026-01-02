# Thoughts on Programming: September 2024

This document summarizes the most salient aspects of my programming style and philosophy.

## Goals

1. Justified confidence that the code is doing what you meant it to do, and can be deployed to production
without causing problems.
2. Smooth, swift development, enabled by understandable code that is easy to gain confidence in (through {{link verification}}).

## Testing

### Testable design

- Divide code into **"too simple to break"** and **"easy to test."**
- "Easy to test" means:
  - No {{link terms/effect effects}}, except those that:
    - are represented as data returned from a function (so, not technically effects at all)
    - occur via an injected procedure which can be stubbed in tests.
- "Too simple to break" means no conditionals or calculations.

### Test feedback

- Speed is important. If you can run a useful subset of your tests in under 400 milliseconds (the [Doherty threshold](https://github.com/benchristel/benchristel.github.io/wiki/DohertyThreshold)) you're doing well. If you can run _all_ your tests in that amount of time, even better!
- What does good test feedback look like?
  - No noise. No clutter. No log messages or stacktraces from caught exceptions.
  - Are the failure messages hard to understand? If so, you can do better.
  - Are the failures easy to understand, but you still have to read them to know what the bug is? You can do better.
  - When you don't even need to look at the failure message to know why tests are failing, you have achived the goal. You grok the code and can reliably predict its behavior in sickness and in health.

### Test coverage

- Post-hoc test coverage (measured by coverage tools) is approximately useless.
- When used as a metric, it becomes actively harmful.
- 100% test coverage means little, except that all of your code can run under _some_ circumstances and not blow up. That's a _really_ low quality bar, which is trivially met by any code written in a [typesafe language](#functional-programming).
- Getting to 100% coverage is probably not worth the effort, given that a good chunk of your code is [too simple to break](#testable-design) and probably {{link terms/instable instable}}.
- As a metric, test coverage is really easy to game. You don't even need to put assertions in your tests!

### TDD

If [test coverage is useless](#test-coverage), how do you know if code is _really_ tested?

- Manual mutation testing: introduce the bug you're afraid of, run the tests, and see if any fail.
- TDD: only write code if it makes a failing test pass. Then you always have 100% _real_ coverage.

This is a nice philosophical argument for TDD, but I think the real value of TDD is:

- It teaches you to spot bugs, and articulate minimal reproduction steps.
- It trains you to be reflective and critique your own code. "What could go wrong here?"
- It makes you realize just how many tests are needed to drive all the bugs out of seemingly simple pieces of code. (far more than most people write)
- As a result, it trains you to be humble about what testing can achieve, re: quality.
- It encourages simple tests (with no more setup than is necessary to fail) and discourages tautological tests (those that always pass no matter what the code does).

## Shallow Hierarchies

- A testing dilemma: what's worse, duplicate coverage or mocks?
  - Testing every function explicitly, with no mocking, duplicates coverage. One bug causes many failures.
  - Mocking, on the other hand, means there can be many bugs and zero failures. Each part works in isolation but they don't fit together.
- Partial solution: test every function, but limit the depth of the dependency graph. If depth is bounded, then the number of test failures per bug is O(1).
- Other benefits:
  - The cause of an error (in tests or production) is never too far from where it is reported.
  - Code is easier to read. The questions "what will happen if I call this function" and "what code depends on this function" are easier to answer.
  - It's easier to get data where it needs to go — fewer layers to pass it through.
- Only mock inverted dependencies — those where the caller of the dependency _really doesn't care_ what's on the other side.
- Only invert dependencies at significant architectural boundaries — i.e. between domains or layers of abstraction (see [organization](#organization), below)

## DIY

- Related to the above: choose libraries with few or no dependencies. Transitive dependencies are hell.
  - Versions can conflict.
  - Your day can be ruined by a bug, security flaw, or supply-chain attack in a package you've never heard of.
- In many cases, you can easily DIY.
  - "A little copying is better than a little dependency" —Rob Pike
- First-party code can _always_ be made to work well with your toolchain (editor, test framework, build tools, deployment system). The same can't be said of third-party code.
- Bottom line: depending on third-party code is a commitment, and will never be hassle-free. Before acquiring a dependency, be sure you are getting commensurate value for the effort and risk you are taking on.

## Functional Programming

- Core ideas:
  - **Immutable data**
  - Simple, composable, app-agnostic **pure functions**
    - Bring the language up to meet the problem.
    - Ubiquitous general-purpose functions mean less code you have to read.
    - Free of {{link terms/effect "side effects"}}
    - Eminently [testable](#testing)
    - Composability facilitates a [shallow dependency hierarchy](#shallow-hierarchies).
  - algebraic types
    - Killer feature: no null pointer exceptions.
    - Incremental typecheckers can be very fast - under the [Doherty threshold](https://github.com/benchristel/benchristel.github.io/wiki/DohertyThreshold) of 400ms.
- You do _not_ need to know anything about monads etc. to get the benefits of functional programming. I learned the monad laws once... and promptly forgot them, because I never _used_ them for anything.

### Pipelines

I like to build up complicated functions by composing simpler ones.

I favor flat, left-to-right composition because it's the easiest for humans to
read.
- flat composition reduces stack depth, and therefore working memory, needed to
  mentally parse the code.
- left-to-right matches the reading order of the surrounding code

In TypeScript, it is possible to write typesafe functional pipelines like so:

```ts
const result = startWith(value)
  .and(doSomething)
  .and(doSomethingElse)
  .result()
```

## Data

- Strictly separate persisted/transmitted data formats from in-process state formats.
- [Parse](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/) inputs, and explicitly serialize outputs.
- Normalize data, [making illegal states unrepresentable](https://www.youtube.com/watch?v=IcgmSRJHu_8&t=1s) in your [business domain model](#organization).
- Transform normalized data ([immutably](#functional-programming), remember) to a convenient format when you read it.

### Persistent data stores are clients

Treat data coming from your database the same way you treat HTTP requests from old versions of your mobile app.

That means that when you change your data model, you must either:

1. Upgrade all old data to have the latest format at rest (analogous to forcing all clients to upgrade to the latest app version)
2. Maintain compatibility with old formats

It also means you shouldn't trust raw persisted data to have the "right" format. Always [parse](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/) data into a typesafe form, and take care not to delete or corrupt data that your code can't handle.

## OOP

### Uses for Objects

While I prefer to use pure functions and immutable data in most of my code, there are times when a mutable object comes in handy.

- Encapsulate process state (what Moseley and Marks would term _accidental state_), e.g. parsing and processing a stream of JSON objects as they arrive, instead of reading them all into memory and then parsing.
  - Streaming data conserves memory and lowers latency.
- Store essential app state (e.g. UI state)
- Serve as registries (e.g. in test frameworks, pub/sub Observables)

### "Faux-O" objects that you can treat as immutable

- Autocompletion (i.e. type `myObject.` and your editor shows you a list of methods)
- Caching and lazy evaluation
- Fancy currying - "A closure is just a poor man's object"
  - Objects have a heft, a gravitas, that functions lack. A class calls attention to itself. Code where everything is a class is a little obnoxious: everything has the same emphasis. When only some things are classes, you can use them as landmarks.

### Rules for Objects

- You should know the lifetime of every object you instantiate. Don't let object references wander around the call graph.
  The function/module/procedure/whatever that instantiates an object should also, generally, destroy it.
  - Factories and constructor functions are exempt from this rule — their _caller_ is the one responsible for destroying the object.
- Objects should communicate with the rest of the world via messages.
- Messages should be immutable data.
- The state of an object should be a pure function of the messages it has received.
- Two objects of the same class that are in the same state should be equivalent. That is, they should behave identically given the same sequence of messages.

## Organization

We can partition the code for an application into various "bins" —

The overall dependency graph of an application codebase should look approximately like this:

<figure style="--fig-width: 100%">
<img alt="3 rows of boxes in a pyramid shape. The topmost box is labeled &quot;Application&quot;. The two boxes in the middle row are labeled &quot;Parsing and serialization&quot; and &quot;Business domains&quot;. The three boxes in the bottom row are labeled &quot;Platform&quot;, &quot;Language-level utilities&quot;, and &quot;Technical domains&quot;. Arrows point from &quot;Application&quot; to each of the other boxes, from &quot;Parsing and serialization&quot; to &quot;Business domains&quot;, and from every box to &quot;Language-level utilities&quot;" src="pyramid.svg" />
<figcaption>The pyramid architecture? Is that name taken?</figcaption>
</figure>

We'll go through each part in turn, bottom up.

### Language-level utilities

This bin is for general-purpose functions that manipulate the language's built-in datatypes (arrays, strings, structs). Underscore, Lodash, or Ramda are libaries that fit this purpose. In a maximalist language like Ruby, this bin might not be necessary because everything you need is built into the standard library.

### Technical domains

This bin is for code which:

- operates at a higher level of abstraction than bare language primitives
- is focused on technical implementation details of the system
- _depends only on the language, not the platform_. I.e. it doesn't access the filesystem or make network calls.

Examples of technical domains: HTTP (just the protocol, independent of transport), HTML, Markdown, URLs, JWTs, cryptography

### Platform

This bin is for code that depends on details of the platform where the program is running, but doesn't care what the application is _for_.

Examples:
- React component library
- GraphQL client
- database client
- routines for reading and writing files

### Business Domains

This is the heart of the program. It knows what the program is for, but not what platform it's running on, or how users will interact with it.

Examples of business domain concepts:
- In a music production app: tracks, instruments, sequencers, notes, pitch, effects, volume, time signature, tempo...
- In a language-learning app: languages, courses, lessons, exercises, correct and incorrect answers, spaced repetition...
- In a dictionary app: words, parts of speech, lemmas, pronunciation, definitions, synonyms, antonyms...

### Parsing and serialization

Parsing code knows how to take data that has been read from the database or some other external source (via Platform code) and convert it into the format used by the Business Domain code.

Serialization code does the opposite, converting from Business Domain format to the format that will be written as output.

Parsing and serialization code depends on Business Domain code because it knows how to create and interpret values of Business Domain types.

### Application

Application code contains the user interface, and the glue code that holds everything else together.

### Consequences of this organization scheme

If the app needs to be replatformed, the Business Domains, Technical Domains, and Language-level Utilities can all stay as they are, because they are pure functions and have no dependencies on the other parts. The other parts may need to be rewritten to various degrees.

Platform, Technical Domains, and Language-level Utilities are candidates for extraction into libraries or reuse in new applications.
