# Software Design in One (Long) Page

(for TypeScript programmers)

## Goals

[Goals]: #goals

Things we need to do with code:

- **Use** it
- **Change** it
- **Explain** it (to users, stakeholders, new teammates, etc.)
- **Debug** it (or better yet, avoid putting bugs in to begin with!)

A prerequisite to all of these: we need to **understand**:

- WHAT it does (its _behavior_)
- WHY it does that.

Complete understanding of the code means we can answer *any* question about it.

On top of these goals, there's one more thing we need to do with code:
**find it.** This one doesn't depend on understanding, so we'll leave it aside
for now.

## Understanding

To understand a function's behavior, you have a few options:

- Look at the interface (name, inputs, outputs)
- If the behavior isn't obvious from the interface, read the doc comment
  (knowing it could be wrong).
- If that fails, maybe read the tests.
- ...or else read the code.
  - If you're reading the code, you now need to understand all of the
    function's dependencies! Repeat recursively.

## Problems with reading code

- The function's dependency tree may go very deep.
- [Effects] like file I/O can be hidden deep in the tree. So can global
  variables.
- You may have to read a ton of code to understand what a function does.
- Figuring out *why* a function does something can be very difficult.

**If you have to spend a lot of time reading code, it means the code is badly
designed!**

Think about libraries. When you use a library, you don't read all the code to
learn how it works. You just call the library's functions and trust that
they'll do what they claim to do. **If you can do this, the library is well
designed.** If it's really well designed, you might not even have to read (much
of) the documentation!

<aside>

### Side note: ease of understanding vs. ease of change

- Sometimes, programmers make code harder to understand in order to make it
  "easy to change."
- Unfortunately, understanding is a prequisite for change, so this doesn't
  really work.
- Also, it's very hard to predict the future. Typically, code that is "easy to
  change" only accommodates a few types of change easily. It's not worth
  making code "easy to change" unless you *know* one type of change happens
  often.

Therefore, in this guide we'll focus on making code easy to understand without
making it *more difficult* to change.

</aside>

## What makes functions hard to understand?

- Unclear name
- Unclear parameters
- Internal complexity (too many variables, ifs, loops, try/catches)
- Knows about too many things or concepts
- Knows about its callers
- (Side) [effects]
- Global variables
- Multiple modes
- Implicit structure in the input data

I call these problems **"imponderables."** We'll discuss what they are, and how to
fix them, in the next several sections.

(TODO: define the imponderables, and add examples)

### Unclear names

<details>
<summary>Expand section</summary>

The name of a function should summarize the function's behavior — i.e. what it
does. Here is an example of a bad name (adapted from [typescriptlang.org]):

[typescriptlang.org]: https://www.typescriptlang.org/

```ts
// Bad code; unclear name!
function verify(result: "pass" | "fail") {
  if (result === "pass") {
    console.log("Tests passed.")
  } else {
    console.log("Tests failed.")
  }
}
```

"Verify" doesn't tell us what this function will do when we call it. At best,
it's a random word plucked from the domain of testing. We can do better.

```ts
// Better code; now the name says what the function does.
function printMessage(result: "pass" | "fail") {
  // ...
}
```

Unclear names hurt because they force us to read the function's internals to
understand how it will behave when called (see [Goals]). Good names save us
time by giving us a sense of what a function call will do, even if we don't
read the code.

</details>

### Unclear parameters

<details>
<summary>Expand section</summary>

The name of a parameter should give you a clue as to *why* you would pass that
parameter, or *what* the function will do differently depending on the value
(see [Goals]). Sometimes the parameter name doesn't matter much because the
name of the function makes its purpose obvious. However, sometimes the
parameter names are important, such as when multiple parameters have the same
type:

```ts
// Bad code; ambiguous parameter names!
function contains(string: string, otherString: string): boolean {
  // ...
}
```

Which string is supposed to be contained in which? The parameter names aren't
helping us here.

We can improve the names by using a metaphor. Here's a cute one that's probably
as old as C:

```ts
// Better: now the names use a consistent metaphor.
function contains(needle: string, haystack: string) {
  // ...
}
```

More straightforward names can also work:

```ts
function contains(substring: string, text: string) {
  // ...
}
```

</details>

### Internal complexity

<details>
<summary>Expand section</summary>

As you read a function, you need to keep track of:

- the variables that are in scope, and their possible values
- the control flow structures (ifs, loops, try/catches) surrounding the code
  you are reading

Your brain only has 7 ± 2 working memory "slots." If your focus is not 100%
on the code, this number effectively goes down. If the number of things you
need to keep track of in the code exceeds your available working memory, the
code becomes *impossible* to read fluently.

Therefore:

- limit the depth and number of control flow structures within a function.
- limit the number of mutable variables (`let` or `var`) within a function.
  Prefer `const`.
- consider inlining constants that are only used once.
- limit the variety of control flow structures within one function.
- prefer guard clauses to nested `if`s.
- prefer writing shorter functions.

I hesitate to put numbers on these guidelines, but I know some readers will
want them. Take these with a grain of salt, and know that there are always
exceptions.

Per function, you should have:

- At most **one** mutable variable (`let` or `var`).
- At most **two** nested control flow structures (e.g. an `if` inside a `for`
  loop).
- At most **one** switch statement, or if statement with `else`/`else if`
  clauses.

If you find yourself exceeding these "limits," look for ways to split up the
function (without introducing more imponderables).

</details>

### Functions that know about their callers

<details>
<summary>Expand section</summary>

- caller-awareness makes it hard to understand why the function does what it
  does, since you need to understand the caller too.
  - but the caller depends on this function, so you need to understand this
    function to understand the caller. Aaargh!

The name of a function should almost never refer to the *caller's purpose* or
to the context where the function should be called. That's because functions
have no control over where they're called. A name that refers to callers
couples the function tightly to those callers, making it difficult to reason
about the function in isolation.

```ts
// Bad code; name doesn't describe behavior.
// "Handle result" could mean anything!
function handleResult(result: "pass" | "fail")  {
  // ...
}
```

Note: this guideline is reversed in the context of [inversion of control],
which we will cover later. <!-- TODO: broken link -->

</details>

### Functions that know about too many things

<details>
<summary>Expand section</summary>

Here is a function from a (fictional) static site generator:

```ts
// Bad code; this function knows way too much!
async function getPageTitle(path: string, basePath: string): Promise<string> {
  if (!path.startWith("/")) {
    path = resolveRelativePath(path, basePath)
  } else {
    path = resolveRelativePath(path.slice(1), "src")
  }
  const html = await fs.readFile(path, "utf-8")
  const dom = parseHtml(html)
  return dom.querySelector("h1")?.innerText ?? basename(path)
}
```

This function knows:

- the program's data is stored in files.
- the path to a file may be given as absolute or relative.
- A path is absolute if it has a leading slash (but that's wrong — it won't
  work on Windows!)
- there is special logic for resolving a relative path — we can't just use the
  path as-is.
- "absolute" paths should actually be interpreted as relative to a `src`
  directory.
- the input files contain HTML.
- the files are UTF-8 encoded.
- the "page title" of an HTML document is the text of its first `h1`
  element.
- the page title should default to the filename if no `h1` is present.

Only the last two bullet points above properly belong in a function named
`getPageTitle`.

There are a couple problems with having everything lumped together like this:

- Someone reading this function might only be interested in a specific aspect
  of what it does, but they have to read all the aspects because they're all
  tangled together.
- It is quite likely that some of this function's knowledge is duplicated in
  other parts of the program. Over time, this function could get out of
  sync with the rest of the program, resulting in bugs.

Here is a better version of the function. We have moved the extraneous
knowledge to the caller, and passed in just what the function needs to
accomplish its central purpose.

```ts
// Better; we have removed the extraneous knowledge.
async function getPageTitle(dom: HtmlDom, path: string): Promise<string> {
  return dom.querySelector("h1")?.innerText ?? basename(path)
}
```

One imponderable still remains: [implicit structure]:

- The `dom` and `path` parameters are correlated (they're supposed to be
  derived from the same file).
- The `path` has internal structure that isn't represented in its type.

In the section on [implicit structure], we'll see how to fix these problems.

</details>

### Functions with effects

An _effect_ is an interaction between a _process_ (a running program) and the
outside world. In general, effects include:

- anything a program does that is visible to another program, or to the user.
- anything that introduces nondeterminism into a program (where multiple runs
  can produce different behavior).

Specific examples of effects:

- reading or writing a file
- making a network request
- drawing graphics on the screen
- playing a sound
- asking the user for input
- generating a random number
- getting the current time

<aside>

Side note: in every modern operating system I'm aware of, effects are
implemented at the operating system level by _system calls_. Processes can't
directly affect the outside world or behave nondeterministically. They have to
ask the operating system to do it for them!

</aside>

Effects are not bad _per se_. In fact, they are necessary! A program that has
no effects is useless. Effects are arguably the most important part of any
program.

But because effects are so important, they can create problems if they're
hidden in the code. When you call a function, you need to be aware of what
effects it will have (if any). If you make incorrect assumptions about effects,
the program will do the wrong thing.

Additionally, effects can create problems for testing. It's often hard for
tests to observe effects, so we need some way to control the effects in our
tests. The usual way to do this is by mocking the effectful function. That
isn't free, though: it makes the tests more complex and harder to understand.

My prescription for dealing with effects can be summarized as follows:

- Make most of your code effect-free. You can do this by moving effects up
  the call tree, so they happen near the root.
- Ideally, code with effects is straightforward enough that it doesn't need
  unit tests. E.g. it should have no conditionals. Move any conditional logic
  down the call tree, into the effect-free code.
- If you find that some code deep in the call tree needs to have an effect,
  first consider:
  - Can you replace an input effect (e.g. reading a file) with a parameter?
  
  - Can you replace an output effect (e.g. writing a file) with a return value?

### Implicit structure in the input data

[implicit structure]: #implicit-structure-in-the-input-data

<details>
<summary>Expand section</summary>

```ts
// Better yet; the path and dom are grouped into an object.
class HtmlPage {
  static async load(path: PagePath): Promise<HtmlPage> {
    const html = await fs.readFile(path, "utf-8")
    return new HtmlPage(parseHtml(html), path)
  }

  constructor(private dom: HtmlDom, private path: PagePath) {}

  getTitle(): string {
    return this.findFirst("h1")?.innerText ?? this.getFilename()
  }

  findFirst(selector: string): DomNode | undefined {
    return this.dom.querySelector(selector)
  }

  getFilename(): string {
    return this.path.getBasename()
  }
}
```

Or perhaps you prefer a data-oriented approach:

```ts
type HtmlPage = {
  path: PagePath
  dom: HtmlDom
}

async function loadHtmlPage(path: PagePath): Promise<HtmlPage> {
  const html = await fs.readFile(path, "utf-8")
  return {
    path,
    dom: parseHtml(html),
  }
}

function getTitle(page: HtmlPage): string {
  return findFirst("h1", page)?.innerText ?? getFilename(page)
}

function findFirst(selector: string, page: HtmlPage): DomNode | undefined {
  return page.dom.querySelector(selector)
}

function getFilename(page: HtmlPage): string {
  return page.path.getBasename()
}
```

</details>

## Summary: fixing the imponderables

| Imponderable        | Fix |
| ------------------- | --- |
| Unclear name        | Just rename it! |
| Unclear parameter   | Just rename it! |
| Internal complexity | Extract functions or classes |
| Knows too much      | Inline, then split up responsibilities differently |
| Knows about callers | Inline |
| Effects             | Inline, then separate effectful from pure parts |
| Global variables    | Treat as effects, or put the vars inside objects |
| Multiple modes      | Split each mode into its own function |
| Implicit structure  | Make it explicit! Use classes or algebraic types. |

## Preventing imponderables

- Codebase organization
  - collocates effects, makes them more visible
  - makes code easier to find, too! (see [Goals])
- Unit testing and test-driven development
  - discourages effects and global vars
  - discourages caller-awareness
  - tests act as runnable documentation
  - makes refactoring (e.g. fixing imponderables) safer

## Objects

What are objects good for?

- caching and lazy evalution
- splitting up a big function (the Procedure Object pattern).
- associating functions with the data types they operate on.
  - makes the functions much easier to find (see [Goals]).
- separating concerns. You can use an object without knowing all the details.
  - TODO: example: JSON stream parser
- reducing the number of variables in a function
  - TODO: example: circular buffer
- mocking effectful dependencies for testing

<style>
aside {
  border: 1px solid #0002;
  border-radius: 5px;
  background: #fff6;
  padding: 2em;
  font-size: 93.75%;
}

aside > :first-child { margin-block-start: 0; }
aside > :last-child  { margin-block-end: 0; }

code, pre { font-size: 93.75%; line-height: 1.5 }
.hljs-string { color: #060; }
.hljs-keyword { color: #007; font-weight: bold; }
.hljs-comment { color: #777; font-style: italic; }

</style>
