# 4. Alternating Repetition

Often in software development, we find that two kinds of centers repeat throughout a structure and are dual to each other. **Alternating repetition** is about noticing these dualities and taking equal care with both halves, so that both are made coherent.

For example, in Unix pipelines, the filter programs repeat, and so do the streams of data between them. Both form [**5. Positive Space**](05-positive-space.html). One way of seeing the pipeline is to see the filters as primary. Another is to see the streams of data as primary.

More generally, routines and data alternate throughout the structure of a program. Data types form the space "between" routines, since data are passed from routine to routine. I've seen too many programs where programmers only thought about the routines, and the data structures were neglected. In a well-designed program, the data is as coherent as the code that processes it. This isn’t a zero-sum tradeoff. Coherence of data enables the code to be _more_ coherent.

Other dualities include:

*   Test code and production code
    
*   Structure and behavior
    
*   Refactoring and features
    

In test-driven development, the rhythm of writing a test and then writing the code to make it pass repeats and alternates. Either the tests or the code can be viewed as primary. Both are coherent, intelligible entities in their own right.

Applying **alternating repetition** to people-space, we get **work-life balance**. One of the things I really appreciated about working at Pivotal Labs was that the workday _ended_, unambiguously, at 6 pm sharp, every day. Engineers didn’t have personal laptops (client confidentiality prevented us from taking code offsite) so it was physically impossible to take work home. The flip side of this was that for the 8 hours we were at work, we were _on_. Pairing 40 hours a week [is no joke](https://www.simplermachines.com/the-mortifying-ordeal-of-pairing-all-day/). The schedule demanded a lot of us — sometimes too much.[^1] But it also, undeniably, brought out our _life_.

[^1]: I sometimes wonder what Labs would have been like if we’d been able to sustain ourselves on 30- or 35-hour workweeks. I’m not sure I’d be able to convince myself to go back to pairing 9-to-6. But 9-to-4? Heck yeah!

<nav class="centered-text">{{prev}} | {{next}}</nav>