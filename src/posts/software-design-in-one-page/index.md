# Software Design in One (Long) Page

(for TypeScript programmers)

## Goals

[Goals]: #goals

Things we need to do with software:

1. **Use** it
1. **Change** it
1. **Explain** it (to users, stakeholders, new teammates, etc.)

A prerequisite to all of these: we need to **understand**:

- WHAT it does (its _behavior_)
- WHY it does that.

Understanding means we should be able to answer *any* question about it.

On top of these, there's one more thing we need to do with software:
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
- You may have to read a ton of code to understand what a function does.
- Figuring out *why* a function does something can be very difficult.

**If you have to spend a lot of time reading code, it means the code is badly
designed!**

<aside>

## Side note: ease of understanding vs. ease of change

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

- Unclear name or parameters
- Internal complexity (too many variables, ifs, loops, try/catches)
- Knows about too many things or concepts
- Knows about its callers
- (Side) effects
- Global variables
- Multiple modes
- Denormalized input/output types

I call these problems "imponderables." We'll discuss what they are, and how to
fix them, in the next several sections.

(TODO: define the imponderables, and add examples)

### Unclear names

The name of a parameter should give you a clue as to *why* you would pass that
parameter, or *what* the function will do differently depending on the value
(see [Goals]).

### Functions that know about their callers

- caller-awareness makes it hard to understand why the function does what it
  does, since you need to understand the caller too.
  - but the caller depends on this function, so you need to understand this
    function to understand the caller. Aaargh!

## Fixing the imponderables

| Imponderable        | Fix |
| ------------------- | --- |
| Unclear name        | Just rename it! |
| Internal complexity | Extract functions or classes |
| Knows too much      | Inline, then split up responsibilities differently |
| Knows about callers | Inline |
| Effects             | Inline, then separate effectful from pure parts |
| Global variables    | Treat as effects, or put the vars inside objects |
| Multiple modes      | Split each mode into its own function |
| Denormalized types  | Normalize the types |

## Preventing imponderables

- Codebase organization
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
