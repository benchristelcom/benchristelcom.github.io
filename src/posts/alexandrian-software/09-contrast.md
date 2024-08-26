# 9. Contrast


In a poorly-structured codebase, all the code has a similar texture. Everywhere you look, it’s approximately the same: a mishmash of different stuff. A bit of SQL, a bit of calculation, a sprinkling of HTML. Every function seems to operate on a mixture of domain concepts and language-level primitives.

When concerns are separated, on the other hand, there is contrast between the parts. The UI code looks very different from the database access code. When you open a file, you can tell at a glance what type of thing it is, and know where it fits in the architecture.

[Sandi Metz](https://github.com/benchristel/benchristel.github.io/wiki/SandiMetz) has a technique she calls the **[squint test](https://www.youtube.com/watch?v=8bZh5LMaSmE&t=3m43s)**: you lean back and squint at the code, looking for changes in shape and changes in color. The more coherence and consistency you see in each part, the better the code is.

> For functional and cognitive clarity, contrast is \[...\] practically necessary: the shop in the neighborhood is different from the houses next to it. \[... Contrast\] allows each center to take its proper nature. It permits more intensive attention to individual functions. And it creates a feeling of distinction which relaxes people, because it acknowledges and permits different dimensions of experience.
> 
> Contrast is the thing which creates differentiation, and allows differentiation. It is the differentiation of the void which gives birth to matter. All differentiation requires that contrast is created in space, in order to give birth to anything at all.
> 
> —_The Phenomenon of Life_, p. 203

<figure style="--fig-width: 100%">
<img src="field-walls.webp" alt="Dales Field Walls">
<figcaption>
&quot;<a href="https://www.flickr.com/photos/8185633@N07/3724578703">Dales Field Walls</a>&quot; by <a href="https://www.flickr.com/photos/8185633@N07">tj.blackwell</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=openverse">CC BY-NC 2.0</a>.
</figcaption>
</figure>


Increasing contrast, whether in code or in the built environment, is ultimately a matter of reducing entropy. Consider the contrast between the green pastures and the stone walls in the photograph above. This contrast was created by a gradual process of entropy reduction: farmers moved scattered stones out of the way and piled them up into walls.

There is something very simple and natural about these ancient stone walls, and indeed we tend to think of the landscape they create as part of nature. But as Christopher Alexander points out, this landscape is _not_ “natural” in the sense of being wild and undisturbed, because of course all of it was made by people. The whole of southern England is one continuous manmade structure covering thousands of square miles, which was built, gradually, over thousands of years. Every part of it is adapted to human needs.

It is remarkable that the contrast between walls and pastures enhances, rather than detracts from, our feeling of naturalness, because we can easily imagine many other contrasting structures that would have the opposite effect — e.g. a glass-and-concrete office building. **Contrast**, of all the fifteen properties, is perhaps the one we have to be most careful with, because it can hurt as easily as it can help. The trick to creating contrast is to do it in a way that has the same natural grace as the walls and roads and fields and forests of the English countryside. You have to be “more natural than nature itself,” to borrow a phrase from Alan Watts. The way to do this, I think, is simply to avoid grandiose ambitions. You want to reduce entropy incrementally, and only as far as it helps. Remember that the overall goal is to improve efficiency, so you should increase contrast only if the effort it will save in the future is worth the effort you put in now. It is this global efficiency, I think, that creates the feeling of life in the whole.

Contrast applies to team structure as well as code. At Pivotal Labs, each project was undertaken by what we called a **balanced team** — a cross-functional group of people that consisted (usually) of a product manager, a designer, and several engineers. The division of responsibilities among these roles was clear and crisp:

*   PMs were responsible for balancing stakeholder needs and prioritizing work.
    
*   Designers were responsible for UI and UX.
    
*   Engineers were responsible for the internal structure of the software, and for providing relative cost estimates for programming work.
    

Anyone could weigh in on someone else’s area of responsibility, but the responsible party always had the final say. This clear **contrast** between the roles meant that a team could generally negotiate its way to a plan fairly quickly and painlessly — perhaps with some grumbling, but no lasting resentment — because we all knew the rules by which we’d agreed to play.

<nav class="centered-text">{{prev}} | {{next}}</nav>