# 1. Levels of Scale

In every modern high-level programming language, source code is organized into centers that span a vast range of scales. Ordered roughly from smallest to largest:

*   characters
*   tokens (variable names, operators, etc.)
*   expressions
*   lines
*   statements
*   paragraphs (chunks of code separated by blank lines)
*   routines (functions, methods, procedures)
*   classes and types
*   modules
*   architectural layers (UI, controllers, service objects, data access)
*   programs
*   services
*   applications
*   application suites (e.g. Microsoft Office)


Christopher Alexander stressed that the mere presence of centers of different sizes was not sufficient to constitute **Levels of Scale**. In order for the whole to feel human-scaled and not alienating, the arrangement of centers must meet a few criteria:

*   The jumps in size between adjacent levels of scale must not be too large. Ratios between 2:1 and 5:1 work well. When the jumps are larger than that, it becomes difficult to perceive a relationship between centers at adjacent scales. Instead of a cohesive whole, we see a jumble of unrelated pieces.

*   Small-scale centers must be present. That is, the levels of scale property must be applied recursively, all the way down to the smallest scale we can perceive or manipulate.

*   The frequency distribution of centers must roughly follow a power law, where there are more smaller centers than larger ones.
    

These criteria echo the received wisdom that “a function should have 5 lines or fewer.” Obviously, this is not viable as a hard-and-fast rule, but it makes sense as a general guideline, and Levels of Scale tells us why. Each center should be simple enough to “fit in your head.” You should be able to see how each center relates to, and is made from, the centers one level smaller. Thus, a line should have only a handful of tokens, a method a handful of lines, and an object a handful of methods.

What would code look like _without_ levels of scale? Well, imagine an assembly-language program where instead of procedures and calls, you just have jumps (i.e. GOTOs) within an undifferentiated mass of instructions.

A program written in this extreme style might have only two levels of scale — instruction and program. The instruction:program ratio might be several thousand to one. Even if you’ve never written or tried to read a program in this style, you can probably imagine the difficulty it would cause!

Levels of scale also exist in people-space. From smallest to largest:

*   Individuals
*   Pairs (if you do pair programming)
*   Teams
*   Departments
*   Offices
*   Geographic regions
*   Companies

Note that the centers on this list don’t form a strict hierarchy, but a [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph): e.g. the people on a cross-functional team come from different departments. In today’s distributed world, a team probably spans offices, too.

<nav class="centered-text">{{prev}} | {{next}}</nav>