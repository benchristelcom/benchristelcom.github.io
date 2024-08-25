# 3. Boundaries


How do we connect the **strong centers** of our programs to the messy outside world? We need some code that serves as the intermediary, the **boundary**, between the two. Boundary code does all the unglamorous yet essential work that’s needed to keep the strong center pristine. Boundaries can parse inputs, serialize outputs, perform effects, and handle errors.

Boundaries don’t have to be associated with strong centers, though. Any time you draw a line between two pieces of code and say “this part is responsible for _this_, and that part is responsible for _that_,” you’ve created a boundary. APIs and function signatures are boundaries. Anything with an inside and an outside has a boundary.

Alexander noted that boundaries in living buildings tend to be **thick**—often far thicker than you might at first think to make them. Thick walls, deep porches, expansive gardens—these are all important boundaries that deserve space.

In many programs that I’ve seen, the boundaries are not given sufficient space or attention. Programmers often balk at creating comprehensive parsers and serializers for their input and output data because “all that code” takes up more space than they think ought to be allotted to the problem. The issues that arise from this are manifold. One issue is that parsing and error handling get smeared throughout the program and often end up contaminating the strong centers. Alexis King has pointed out the problems with this:

> \[A\] program that does not parse all of its input up front runs the risk of acting upon a valid portion of the input, discovering a different portion is invalid, and suddenly needing to roll back whatever modifications it already executed in order to maintain consistency. \[. . .\] The entire program must assume that raising an exception anywhere is not only possible, it’s regularly necessary.
> 
> Parsing avoids this problem by stratifying the program into two phases—parsing and execution—where failure due to invalid input can only happen in the first phase. The set of remaining failure modes during execution is minimal by comparison, and they can be handled with the tender care they require.
> 
> —[Alexis King, “Parse, don’t Validate”](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/)

Another, related problem stemming from insufficient parsing is that invalid or undesirable states, which ideally should not be representable in the core domain model, end up being representable. Code that works with the domain model then has to handle these bad states. It’s much tidier to reject the bad states upfront, in a parsing layer.

Alan Kay once likened OOP objects to biological cells — noting that cells spend an enormous amount of energy just _maintaining their boundaries_, keeping the bad stuff out and the good stuff in. Objects in programs are similar: they can and must reject bad input at their boundary, so it doesn’t propagate further into the program.

Thick boundaries also have their place in team organization. At Pivotal Labs, we did something that Todd Sedano calls [dual-track software development](https://www.researchgate.net/publication/343280168_Dual-Track_Development). Product managers and designers worked in one “thread,” defining how the product should look and work from the user’s perspective. Engineers worked in a parallel thread, writing the code to make the PM’s dreams come true. The boundary between the two threads was a priority queue, the _backlog_. The PM would insert work items into this queue — choosing their position according to priority — and engineers would pop the top item off the queue whenever they needed a new thing to do.

This boundary — the explicit structure of it, with exactly one “highest priority” work item at any one time, and the explicit rules about how it was to be used — made communication about the project much smoother. It left less room for anxiety and clashing egos. But it also made room for joy: the satisfaction of getting things done, knowing that they were important to someone.

<nav class="centered-text">{{prev}} | {{next}}</nav>