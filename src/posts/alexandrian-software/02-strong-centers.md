# 2. Strong Centers

> One subtle but powerful way to promote compactness in a design is to organize it around a strong core algorithm addressing a clear formal definition of the problem, avoiding heuristics and fudging.
> 
> —[Eric S. Raymond,](http://catb.org/esr/writings/taoup/html/ch04s02.html#id2895445) _[The Art of Unix Programming](http://catb.org/esr/writings/taoup/html/ch04s02.html#id2895445)_[, "Compactness and the Strong Single Center"](http://catb.org/esr/writings/taoup/html/ch04s02.html#id2895445)

In Alexander’s terms, a **Strong Center** is one that plays a “primary” role in a design. It is the core, the heart, the kernel of the thing: its reason for being. A Strong Center tends to have support from many other centers, which are subordinate to it and less central. This “support” can come in the form of another of the 15 properties, but it can also simply be a “pointing” relationship, where the subordinate center gets its purpose from the strong center. The key point is that the subordinate centers are organized around the central strong center. They come into being, and are shaped the way they are, _because_ of the strong center.

Examples of strong centers in architecture include:

*   The stage of a theater
*   The altar of a church
*   A town square or main street
*   A university quadrangle
*   The main room of a house (in my house it’s the kitchen)

But what does a strong center look like in a computer program?

Imagine it’s your first day on a new team. The tech lead sits you down in front of a whiteboard and says “okay, the first thing you need to know about this system is X.” X is likely to be the strongest center in the system.

Examples:

*   “We use **[CRDT](https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type)s** to sync data between peers”

*   “There’s a **rules engine** that runs all the business logic”

*   “This program is structured as a **pipeline** that processes data via a sequence of transformations”

*   “Our **domain model** is written in a functional style, with algebraic types”

*   “It’s a CRUD app on top of a **Postgres database**”

*   “It’s a **Minecraft** mod”

*   “We use **Redux** for all our clientside state”
    

Having a strong center, a “first thing to know,” on a project is wonderfully reassuring. When you get lost, you can orient yourself relative to the strong center. As long as you can relate the bit of code you’re looking at to that center, you know at least one important thing about it. You can see how it fits into the big picture.

As Eric Raymond points out in the quote above, strong centers should be precision-engineered and rock solid. A bit of **roughness** outside the strong center is fine, if it helps accommodate supporting centers to the strong center. But the strong center itself must be exact: it’s the foundation for the rest of the system, so it pays to get it right.

A strong center need not be a formal algorithm or model, though—it can simply be the “central” part of a design, the part toward which the other parts “point.” Whenever you hear software engineers talking about the “edge” of a system, you know that there is a strong center somewhere nearby. Without a center, there could not be an edge!

For example, in a typical Ruby on Rails app, the center is the database. We have the sense that web requests come in at the “edge” of the system, and travel inward through “layers”—controller, services, and model—finally arriving at the central database. Then the response data goes back out, passes through the outermost “view” layer, and finally is returned to the client.

By contrast, in applications that use functional domain-driven design, the domain model is the strongest center. Database interactions happen near the edge of the system, and it is the in-memory domain model that forms the kernel, the solid core of the program.

Extending the idea of strong centers into people-space, we get the concept of a **team lead** — the role that, at Pivotal Labs, we called “anchor.” The history of the anchor role is instructive. Early on in the history of Labs (which was a software consulting company) engineering teams had a completely flat structure and fluid membership. Labs engineers might rotate between client projects on a weekly basis. Because engineers were pair-programming full time, this worked on a technical level—knowledge-sharing happened fast enough that someone _could_ contribute meaningfully to a project in a one-week rotation. But clients weren’t totally happy with it. They wanted the stability of having _one person_ they could talk to about the technical aspects of the project. Thus, the anchor role was born. An anchor was simply an engineer who would be assigned to the project for its entire duration, and serve as the primary point of contact with the client.

It’s worth considering this history from the perspective of the 15 properties. In essence, Pivotal Labs

*   started out without strong centers on its engineering teams
*   identified that this structure was mismatched with their clients’ needs
*   fixed the problem by strengthening a center.

This is how adaptation works. It’s also a great example of how, in a complex system, a small change to a parameter (in this case, the length of time that team members stayed with a project) can have a big impact.

<nav class="centered-text">{{prev}} | {{next}}</nav>