# Web Log

This page is a reverse chronology of what I've been doing and thinking about. You can [subscribe to updates here](/subscribe.html).

<style>
:root {
  --body-width: 46em;
  font-size: 16px;
}

h1, h2, h3 {
  font-family: Cantarell, 'Lucida Grande', Tahoma, system-ui;
}

a[href*='subscribe.html'] {
  text-shadow: 0 0 8px #ff8;
}
</style>

<!--
@marss
title: Ben Christel's Web Log
description: The changelog / microblog of benchristel.com
link: https://benchristel.com/log.html
htmlUrl: https://benchristel.com/log.html
language: en-us
webMaster: benchristel@gmail.com (Ben Christel)
managingEditor: benchristel@gmail.com (Ben Christel)
-->

<!--

## August 18, 2024: NEXT POST

> Every time i look at what sites are linking to me in my analytics i get faintly sad. I gotta ward off the “Making A Smol Old Indie Yester Free Web Personal Garden Commonplace Book Is A Revolutionary Act” crowd somehow, if someone’s linking to me and their site’s only other page is a manifesto about how Mark Zuckerberg personally smashed every Geocities server they’ve severely misunderstood why i tend to my website
>
> —Xanthe Tynehorne

### Random thoughts

Programming is the art of accounting for the possible and ruling out the impossible.

-->

## 2024-08-11: Site Tidying

I am still working out how best to organize pages on this site. This week, the [welcome](/welcome.html) page came into its own as the _de facto_ index page for this site (The true `/index.html` being a list of links to my other web presences). Concretely, what this means is that links labeled "Home" go to the welcome page. The only way to navigate back to `/index.html` is to use the "Out Again" link at the bottom of the welcome page.

This is essentially an instance of the [**Entrance Transition** pattern](https://github.com/software-patterns/workshop/blob/master/patterns/entrance-transition.md), which I've seen on a lot of personal sites — especially older and retro-themed ones. I like it because it makes the site feel like more of a place: it has a distinct inside and a distinct outside.

---

I'm not big on the idea of "standardizing" websites that are ostensibly personal, but that said, I think the indieweb community has developed some good standard patterns that I'd like to adopt. Specifically, I'd like to have a [`/uses` page](https://uses.tech/) that's separate from the main [portal](/portal.html). I think the way I've organized my links to tools is not going to scale; a lot of them are lumped under "Software Development," but some are in their own "Web-based tools" section. In reality, the tools in both sections run the gamut from "extremely geeky" (Bun, Regex 101) to "something everyone should know about" (uBlock Origin, Purple Air). So a reorg is probably in order.

Speaking of indieweb, a post in [#indieweb IRC](https://chat.indieweb.org/) led me to [Brandon's Journal](https://brandons-journal.com/) and his awesome [links page](https://brandons-journal.com/links/). That led to a conversation, which led to Brandon joining the [Wayward Webring](https://waywardweb.org). Welcome, Brandon!

---

I also discovered [Maggie Appleton's deep dive on the history of digital gardening](https://maggieappleton.com/garden-history) and realized not only that my ["bliki"](https://github.com/benchristel/benchristel.github.io/wiki) is really a digital garden, but that I independently [reinvented](https://github.com/benchristel/benchristel.github.io/wiki#levels-of-polish) the idea of labeling "epistemic status." This could be taken as evidence that [civilization is forgetful and fragmented](/posts/0000-the-mess-we-are-in.html), but more likely, I'm just out of touch. Fine, Ward Cunningham [called it a bliki in 2003](https://martinfowler.com/bliki/WhatIsaBliki.html), but the kids these days call it a digital garden. I can adapt. It is interesting though, that Appleton doesn't mention the bliki concept as a forerunner of digital gardening, so maybe there really are two distinct lineages — or maybe the connection between them has just been lost to history.

---

I spent a lot of time this week tinkering with various little features and quality-of-life improvements to the site. For example, the searchbar on the [portal page](/portal.html) now has [documentation](/portal/search-docs.html), and I added some knobs to the CSS so that multi-column pages can be wider than single-column articles.

---

Finally, a meta-note on how I wrote this log entry. I went into it thinking I accomplished nothing this week and had nothing to write about. Then I ran:

```
git log --since 2024-08-04 --name-only
```

This lists the commits I made since the previous entry, along with the files changed by each commit. That was enough to jog my memory. Turns out I did stuff!

## 2024-08-04: The Mess We're In

### Writings

Published: ["The Mess We're In"](/posts/0000-the-mess-we-are-in.html)

### Quotes

> Philosophy is a battle against the bewitchment of our intelligence by means of language.
>
> —Ludwig Wittgenstein

### Currently stuck in my head

[J'aim la flour de valour](https://benchristel.github.io/yt/#nT6XeItIGlU) by Guillaume de Machaut

[![](/assets/jaim-la-flour.jpeg)](https://benchristel.github.io/yt/#nT6XeItIGlU)

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

[Read more...](/tricks/yarn.html#globally-install-a-package-youre-developing)

### @regosen/gapless-5, tiny-invariant

I've listed two new JavaScript libraries I use on the [Web Portal](/portal.html) page:

- [@regosen/gapless-5](https://www.npmjs.com/package/@regosen/gapless-5) - gapless and looped audio playback on the web. Essential if you're building a music player. I'm using it in my [meditation timer](https://benchristel.github.io/meditation) to loop the audio.
- [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) - a TypeScript assertion library that does [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html). Handy for those cases where _you_ know what type something is,
but TypeScript doesn't, and you just want to throw an error in the (presumably impossible) case where the thing is the wrong type and move on with your life. I learned about tiny-invariant by contributing to [Mafs](https://mafs.dev/), [Steven Petryk](https://stevenpetryk.com/)'s ReactJS library for math visualization.

### End of July

Today being the last day of the month, I've updated the [metrics page]() with the latest data.