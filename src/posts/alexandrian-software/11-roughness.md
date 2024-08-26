# 11. Roughness


Every living system has a certain looseness of form, a relaxed and casual **roughness**. This roughness comes about not because the system is sloppily made, but because it is precisely adapted to the complex system of forces in its environment. By contrast, rigid, geometrically perfect forms tend to feel dead and sterile, because they are not adapted to the real forces around them. Their shape is imposed from outside, based on artificial images of how things “should” be, and not on reality.

Roughness is everywhere in software systems. It is perhaps the second most fundamental property of good software, after **levels of scale**.

For example, roughness occurs at the semantic level when we choose an “incorrect” solution for its performance or simplicity. As Linus Torvalds pointed out,

> “pi = 3.14” is (a) infinitely faster than the “correct” answer and (b) the difference between the “correct” and the “wrong” answer is meaningless.

Approximations and heuristics are often perfectly acceptable, and can be preferable to “correct” solutions because they are cheaper either in computing resources or programmer time.

Roughness often involves relaxing artificial rules and constraints to get a globally better result. I love test-driven development and algebraic types, but there are times when it’s just too hard to write precise tests or types for something, so sometimes I let things be a little unsafe to avoid contorting the code.

Roughness occurs at a syntactic level too: it’s often better to relax line-length constraints than to format similar chunks of code inconsistently. Some code formatting tools (I’m looking at you, [Prettier](https://prettier.io/)) are not able to take context into account when deciding whether and where to break lines, which leads to awkwardnesses like this:

```js
const users = [
  {
    userId: 1,
    username: "Alfie Carmelita",
  },
  { userId: 2, username: "Gina Roshan" },
  { userId: 3, username: "Shug Nabu" },
  {
    userId: 4,
    username: "Rahman Fraser",
  },
  { userId: 5, username: "Toshe Lyuben" },
  {
    userId: 6,
    username: "Sergio Nilofar",
  },
];
```

(source: Anthony Fu, [https://antfu.me/posts/why-not-prettier](https://antfu.me/posts/why-not-prettier))

This example would almost certainly be more readable if each of the user records were on one line:

```js
const users = [
  { userId: 1, username: "Alfie Carmelita" },
  { userId: 2, username: "Gina Roshan" },
  { userId: 3, username: "Shug Nabu" },
  { userId: 4, username: "Rahman Fraser" },
  { userId: 5, username: "Toshe Lyuben" },
  { userId: 6, username: "Sergio Nilofar" },
];
```

Locally-consistent, **symmetry**\-enhancing formatting matters more for readability than the global consistency of line length. Yet Prettier enforces the latter at the expense of the former, because that's easier.

Note that this example is at odds with our everyday sense of “roughness.” The rigid yet inconsistent formatting enforced by Prettier looks “rough” to us, while the example I’ve called “rough” looks regular. But there is no contradiction. In fact, _this is the whole point of Alexander’s concept of roughness_. Something that seems rough to a machine, because it defies the simplistic rules by which that machine operates, can feel simple and natural to us. Roughness arises in its purest form when every center is shaped only by the forces that really matter.

The psychological effect of this subtle kind of roughness is that one perceives the program as down-to-earth, humble, handmade, human-scaled. Roughness in an object touches the heart, because it shows that the maker was free — free to do the work in the most aware and effective way, constrained only by what really mattered in that situation.

> In our time, many of us have been taught to strive for an insane perfection that means nothing. To get wholeness, you must try instead to strive for this kind of perfection, where things that don’t matter are left rough and unimportant, and the things that really matter are given deep attention. This is a perfection that seems imperfect. But it is a far deeper thing.
> 
> —Christopher Alexander

<figure style="--fig-width: 430px">
<img alt="a pattern of hand-laid tiles, not quite straight" src="azulejos.webp">
<figcaption>A wall of the House of Tiles (<em>Casa de los Azulejos</em>), Mexico City</figcaption>
</figure>

<nav class="centered-text">{{prev}} | {{next}}</nav>