# Web Log

This page is a reverse chronology of what I've been doing and thinking about. You can [subscribe to updates here](/subscribe.html).

<style>
:root {
  --body-width: 46em;
  font-size: 16px;
  letter-spacing: 0.01;
}

h1, h2, h3 {
  font-family: Cantarell, 'Lucida Grande', Tahoma, system-ui;
}

hr {
  border: none;
}
hr::after {
  display: block;
  text-align: center;
  content: '—ɔOc—'
}

a[href*='subscribe.html'] {
  text-shadow: 0 0 8px #ff8;
}
</style>

<!--
@marss
title: Ben Christel's Web Journal
description: The changelog / microblog of benchristel.com
link: https://benchristel.com/log.html
htmlUrl: https://benchristel.com/log.html
language: en-us
webMaster: benchristel@gmail.com (Ben Christel)
managingEditor: benchristel@gmail.com (Ben Christel)
-->

## 2024-08-04: The Mess We're In

### Writings

Published: ["The Mess We're In"](https://benchristel.com/posts/0000-the-mess-we-are-in.html)

### Quotes

> Philosophy is a battle against the bewitchment of our intelligence by means of language.
>
> —Ludwig Wittgenstein

### Currently stuck in my head

[J'aim la flour de valour](https://benchristel.github.io/yt/#nT6XeItIGlU) by Guillaume de Machaut

[![](https://benchristel.com/assets/jaim-la-flour.jpeg)](https://benchristel.github.io/yt/#nT6XeItIGlU)

### Wanted

I want a list of cross-platform `font-family` values, using only fonts that ship with operating systems.
E.g. if I want to use a humanist sans-serif typeface on my website, and I don't want my users to have
to download fonts, what are some `font-family` settings that will result in good-looking, consistent
typography across Windows, macOS, Ubuntu, iOS, and Android?

I feel like this is an important resource for anyone who wants to keep their website ultra-lean (as I do).
I also feel like I've seen such a resource within the last few years, but sadly I don't have it bookmarked.
Can anyone in the audience help me out? Send email to benchristel at gmail.com. I'll give you a backlink.

### Working On

- [marss](https://github.com/benchristel/marss), a Markdown-to-RSS converter. It's not quite ready for release, but I'm already using it to generate the RSS feed for this page.

## 2024-07-31: Site Updates

### Globally install a package you're developing

Today I learned that you can install a NodeJS package you're developing without first publishing it to a package registry like NPM. `yarn global add "file:/absolute/path/to/repo"` will do the trick.

[Read more...](https://benchristel.com/tricks/yarn.html#globally-install-a-package-youre-developing)

### @regosen/gapless-5, tiny-invariant

I've listed two new JavaScript libraries I use on the [Web Portal](https://benchristel.com/portal.html) page:

- [@regosen/gapless-5](https://www.npmjs.com/package/@regosen/gapless-5) - gapless and looped audio playback on the web. Essential if you're building a music player. I'm using it in my [meditation timer](https://benchristel.github.io/meditation) to loop the audio.
- [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) - a TypeScript assertion library that does [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). Handy for those cases where _you_ know what type something is,
but TypeScript doesn't, and you just want to throw an error in the (presumably impossible) case where the thing is the wrong type and move on with your life. I learned about tiny-invariant by contributing to [Mafs](https://mafs.dev/), [Steven Petryk](https://stevenpetryk.com/)'s ReactJS library for math visualization.

### End of July

Today being the last day of the month, I've updated the [metrics page]() with the latest data.