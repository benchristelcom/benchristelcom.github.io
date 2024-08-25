# 6. Good Shape


Christopher Alexander’s concept of **good shape** is confusingly similar to **positive space**. Even he has trouble defining it:

> When I began looking for living structures, I was surprised to find out how often, mixed with other properties, there was an element that seemed to defy analysis: the works contained elements with the most gorgeous, beautiful, powerful shapes. Sometimes this beauty of shape seemed subtle, complex, beyond analysis. I became aware of a special quality that I began to think of as _good shape_, but could not very easily explain it, or define it.
> 
> — _The Phenomenon of Life_, p. 179

He analyses the concept thus:

> It is easiest to understand good shape as a recursive rule. The recursive rule says that the elements of any good shape are always good shapes themselves. \[...\] In addition, we note that the simplest and most elementary good shapes are made from elementary figures.

Have you ever seen code that had this feeling? Code that was simple, elegant, powerful, self-evident — and yet, on close inspection, seemed to be made out of almost nothing?

Here is an example of the kind of code that impresses me with its good shape:

```js
const actors = take(movies)
  .and(flatMap(get("castMembers")))
  .and(deduplicate)
  .and(sort(descending(by(get("name")))))
  .result
```

This bit of JavaScript is made of eight independent functions, the most complicated of which can be written in five lines. Each function has an intense focus that gives it good shape. The whole thing has good shape because — well, just look at it. You can tell exactly what it’s doing. I don’t even need to describe it. The fact that these simple functions can be composed in such an intricate way, and that the whole thing works exactly as you would expect, is marvelous.

> You can call it beautiful code when the code makes it look like the language was made for the problem.
> 
> —Ward Cunningham

<nav class="centered-text">{{prev}} | {{next}}</nav>
<br><br><br>

Bonus example: watch Brian Kernighan write a spell-checker in one line of shell (demo starting ~5 minutes in):

<iframe src="https://www.youtube.com/embed/tc4ROCJYbm0" title="AT&amp;T Archives: The UNIX Operating System" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>