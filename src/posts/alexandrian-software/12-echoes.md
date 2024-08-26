# 12. Echoes


There are certain ideas from computer science that show up again and again in software systems, and at many different [levels of scale](https://bensguide.substack.com/i/144076033/levels-of-scale). These ideas seem timeless—inseparable, perhaps, from the nature of information itself. Some examples:

*   Processes → echoed in Go’s goroutines, generators in JavaScript and Python, and Ruby’s blocks.
    
*   Objects and message-passing → echoed in services and API calls.
    
*   Queues of messages and events
    
*   Actors, which are processes + objects + queues
    
*   Graphs, and especially trees
    
*   Parsing (transforming data from less structured to more structured, with a possibility of failure) and presentation (transforming the other way)
    
*   Self-stabilizing feedback systems; eventual consistency
    
*   Polling vs. notifications
    
*   Extract-Transform-Load → echoed in [James Shore’s](https://www.jamesshore.com/v2/projects/nullables/testing-without-mocks#logic-sandwich) **[Logic Sandwich](https://www.jamesshore.com/v2/projects/nullables/testing-without-mocks#logic-sandwich)** [pattern](https://www.jamesshore.com/v2/projects/nullables/testing-without-mocks#logic-sandwich) (gather input, compute, write output)
    

These ideas are larger than electronic computation; their application extends to (or, more likely, is inspired by) human communication patterns.

*   A company made up of many teams or departments can be modeled as a bunch of **objects** **sending messages** to each other.
    
*   The outermost **feedback loop** of the software development process is mediated by humans, who are ultimately the ones who must stabilize the system when things go wrong.
    
*   An ordered backlog of work items is a **priority queue** that communicates between the product manager and the engineering team.
    
*   …and so on.
    

When you can see the echoes in different parts of the system, you have more places to get design ideas from. This makes designing easier and more joyful. As Christopher Alexander wrote,

> Often, when all the different details are members of a family, the task of making the building becomes simpler, the rhythm of making it faster, more economical. It can produce the necessary variety without trouble. If, on the other hand, the details are disparate, it is such an effort, mentally, to make the building at all, that there is less room for variation and invention. The result: in a building _without_ echoes, the final adaptation of the building to its needs is often weaker.
> 
> —_The Phenomenon of Life_, p. 221

Using an echo of an existing solution sometimes doesn’t feel very creative, and that’s fine. The general principle, in both software and buildings is: keep the broad strokes boring — trite, even — so you can focus your attention on the details that really matter to the user experience. Users aren’t there to appreciate the structure of your building or software application. They don’t care how innovative or interesting that structure is if it doesn’t improve their experience.

<nav class="centered-text">{{prev}} | {{next}}</nav>