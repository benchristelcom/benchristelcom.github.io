# 8. Deep Interlock and Ambiguity


Alexander observed that adjacent centers often “hook into” one another where they meet — forming a type of **thick boundary (**see the previous post**)**. For example, a city plaza might have arcades along its edges. These arcades form part of the public space of the plaza, but they are also a kind of outdoor room or passageway for the building to which they connect. The two centers, the building and the square, blend and interpenetrate in the boundary region formed by the arcade.

<figure class="bleed">
<img src="plaza.webp" alt="Plaza Mayor de Madrid, Spain">
<figcaption>
"<a href="https://www.flickr.com/photos/30982194@N05/5476777806">Plaza Mayor de Madrid (Spain), HDR</a>" by <a href="https://www.flickr.com/photos/30982194@N05">marcp_dmoz</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse">CC BY-NC-SA 2.0</a>.
</figcaption>
</figure>

<figure>
<img src="arcade.webp" alt="Arcade in one of the buildings next to the plaza">
<figcaption>
"<a href="https://www.flickr.com/photos/30996501@N07/32820994968">PLAZA MAYOR, MADRID DE LOS AUSTRIAS 8648 4-1-2019</a>" by <a href="https://www.flickr.com/photos/30996501@N07">Jose Javier Martin Espartosa</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse">CC BY-NC-SA 2.0</a>.
</figcaption>
</figure>
  
In software, deep interlock often occurs in the form of **inversion of control**, where a function calls back into code owned by its caller:

```
const evens = [1, 2, 3].map((n) => n * 2);
// evens = [2, 4, 6]
```

A related concept is ambiguity — specifically ambiguity of structural hierarchy. A simple example can be seen in the herringbone pattern below:

<figure>
<img src="herringbone.webp" alt="herringbone bricks with moss">
<figcaption>
"<a href="https://www.flickr.com/photos/10347634@N08/6346339424">herringbone bricks with moss</a>&quot; by <a href="https://www.flickr.com/photos/10347634@N08">Midlife.Bloomer</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=openverse">CC BY-NC-ND 2.0</a>
</figcaption>
</figure>

Each herringbone is made of two rows of bricks: one angled one way, and one angled the other way. Each of these angled rows belongs to two herringbones: one pointing left and one pointing right. Because the hierarchy is ambiguous, you can perceive the whole as a tiling of left-facing herringbones, or as a tiling of right-facing herringbones. The interlocking, overlapping centers formed by the herringbones make the whole pattern feel unified.

Ambiguity occurs whenever we have an “intermediate” center — often a datatype or interface — which is the common property of all the centers it connects. The data or interface serves the needs of both its producers and its consumers, and is associated with them both.

In people-space, hierarchical ambiguity shows up in **matrix management** of **cross-functional teams**. In matrix management, the person who decides what you work on day-to-day (e.g. the _product manager_) is generally not the person you report to. The decoupling of people management from product management enables the formation of cross-functional teams — teams that have all the expertise (design, business, engineering) needed to create a successful product.

In all cases, ambiguity creates multiple ways of looking at things: more potential groupings of centers, each of which is a candidate for being strengthened or reconfigured as the whole evolves to solve new problems.

<nav class="centered-text">{{prev}} | {{next}}</nav>