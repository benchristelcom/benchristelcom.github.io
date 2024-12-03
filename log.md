# Web Log

This page is a reverse chronology of what I've been doing and thinking about. You can [subscribe to updates via RSS](/subscribe.html).

<style>
:root {
  --body-width: 46em;
  font-size: 16px;
}
</style>

<!--
@marss
title: Ben Christel's Web Log
description: The changelog / microblog of benchristel.com
link: https://benchristel.com/log.html
htmlUrl: https://benchristel.com/log.html
language: en-us
publishAtUtcHour: 12
webMaster: benchristel@gmail.com (Ben Christel)
managingEditor: benchristel@gmail.com (Ben Christel)
-->

<!--

## August 18, 2024: NEXT POST

> Every time i look at what sites are linking to me in my analytics i get faintly sad. I gotta ward off the “Making A Smol Old Indie Yester Free Web Personal Garden Commonplace Book Is A Revolutionary Act” crowd somehow, if someone’s linking to me and their site’s only other page is a manifesto about how Mark Zuckerberg personally smashed every Geocities server they’ve severely misunderstood why i tend to my website
>
> —Xanthe Tynehorne

I want to write a post soon about how I think the Wayward Webring will die (cheery, I know, but it will help me ward off the envisioned death). One cause of death I might predict: the sites on the ring become so self-referential, so focused on the smol web for the smol web's sake, that the ring just sublimates into a kind of informational froth — all meta-analysis, no meat.

Like Xanthe, I too want to ward off the "revolution" — but the revolution I'm grappling with is in my head. The urge to write "engaging" rants is something I battle every day. It's enticing and gratifying to believe that, by making a website, I'm doing something politically significant. But it's more honest to admit that I'm mostly just writing notes to myself. I have to remind myself that the things I've created with no audience in mind are the things I look back on now as some of my best work.

### Random thoughts

Programming is the art of accounting for the possible and ruling out the impossible.

An optimistic vision of the future: Instead of your friends sarcastically saying "let me Google that for you," Google's AI would sarcastically say "let me ask your friends for you." And then it actually _would_ ask your friends, or at least, their web presences. Of course, _Google_ won't do this, because where's the money? But _someone_ might.

The worldview of consumerism says the world is made of _things_. Creating value, in this system, equates to creating _things_. Christopher Alexander's worldview says the world is made of _structure_, and that value is created by giving order to that structure.

-->

## December 2, 2024

The [Web Portal](/portal) page has a spiffy new design, and some new features:

- Hit `enter` to navigate to the first link matching your search query. If no links matched, it'll search DuckDuckGo instead.
- A few [DuckDuckGo bangs](https://duckduckgo.com/bangs) will autocomplete if you begin your search query with a bang.
- Search now finds items by URL as well as visible text.

This last feature was enabled by a new release of [hypersearch](https://www.npmjs.com/package/@benchristel/hypersearch)!

The [metrics](/metrics.html) page is up-to-date with November's data.

## November 16, 2024

I now have a [/uses page](/uses) listing the hardware and software I currently use.

The [metrics](/metrics.html) page is up to date with the latest data. The project to remove my dependency on web search is going well!

Meanwhile, I am working on the [fourth beta version of OGTRTA](/conlangs/ogtrta/v0.4), a syntax framework for constructed languages.

## September 1, 2024: "Code Quality: Hidden Costs, Unexpected Benefits"

I've posted a new article: ["Code Quality: Hidden Costs, Unexpected Benefits"](/posts/code-quality-costs-benefits/)

It being the first day of September, I've also updated the [metrics](/metrics.html) page with August's data.

## August 25, 2024: Christopher Alexander essay migrated from Substack

Earlier this year I wrote a serial essay about how Christopher Alexander's work applies to software. I just finished copying it from my Substack newsletter to this site. You can [read the whole thing here](/posts/alexandrian-software).

## August 24, 2024: Just say no to Chronos

I've released a couple improvements to the tools I use to build this website. Those tools are:

- [**mdsite**](https://benchristel.github.io/mdsite), a simple static site generator that can turn any tree of Markdown files into HTML. If you want to write an HTML book like [_The Art of Unix Programming_](http://www.catb.org/esr/writings/taoup/html/), or just put your [digital garden]() on the web, `mdsite` has got your back.
- [**marss**](https://www.npmjs.com/package/marss), which turns a Markdown changelog or microblog into an RSS feed.

### mdsite

mdsite 0.6.0 improves on the previous release, 0.5.1, by adding support for GitHub-Flavored Markdown footnotes. You can see those in action in my [Christopher Alexander series](/posts/alexandrian-software/alexander.html), which I'm in the middle of migrating from [Substack](https://bensguide.substack.com).

### marss

Marss is actually getting its _first_ release, so there isn't much to say about it that's not covered by [the documentation](https://github.com/benchristel/marss/blob/v0.0.0/README.md).

I wrote marss because I couldn't find a markdown-to-RSS generator that took a _single_ changelog file as input. All the existing ones seem oriented toward blogs: they read a directory of posts, and generate a feed entry for each post. Contrary to what you might assume from its name, my _web log_ is not a blog. It is neither a series of standalone articles, nor a stream-of-consciousness social media feed. I think of it more as a unified changelog for all of my web presences — and crucially, one that includes only _notable_ changes that I think are worth emailing people about. In order for this to work, the web log has to be decoupled from the changes to actual content (prose and software), because I update that stuff all the time in fairly insignificant ways. I'm also constantly [writing drafts in public](https://github.com/benchristel/benchristel.github.io/wiki) — for my own convenience, because they're easier to find that way. So an RSS feed that notified people of every file I created or updated would be obnoxiously frequent.

Tangent time: I've been musing about our society's tendency to order everything by recency or in-the-moment relevance, and whether this might be harming us (gee, Ben, ya think?) Some of my favorite websites ([Dreamsongs](https://dreamsongs.com/), [Every Noise at Once](https://everynoise.com/), [Ardalambion](http://ardalambion.org/)) do not order their content chronologically. I like the timeless quality this imparts. Such websites often have changelogs — e.g. here's  [Dreamsongs'](https://dreamsongs.com/SiteHistory.html) and [Ardalambion's](http://ardalambion.org/new.htm), so returning visitors can see what's new if they want. But the chronological ordering is strictly secondary.

Frequently-updated chronologies and feeds always feel vaguely stressful to me. That might be because we most often consult Chronos when things have gone terribly wrong. Examples:

- Programmers don't dig through the commit history when the code is self-explanatory and doing what they expect. They only do it when the number of [WTFs per minute](https://www.reddit.com/r/ProgrammerHumor/comments/1f9df7/the_only_valid_measurement_of_code_quality/) spikes, and they need to figure out how the code got so bad in order to understand what it even does.
- If you see a bunch of people in a conference room poring over a timeline, you can bet they're in an incident postmortem, reconstructing the sequence of events that led up to some disaster.
- The news is mostly bad news because people want to know what's urgent, and positive developments, though they may be recent, are not urgent. No one needs up-to-the-minute information when all is well, but we demand it in a crisis.

We call on chronologies to understand present problems and trace their causes. These are important things to be able to do, but they aren't the _only_ things we need to do. Forcing everything we do into a chonological stream of updates (the default on the modern web) imparts a false sense of urgency to those updates, even as it skews the information we consume toward ephemera that we'll have forgotten in a month.

I need to stop writing lest this become a _blog post_, but if you want to read more, here's a link to [How Blogs Broke the Web](https://stackingthebricks.com/how-blogs-broke-the-web/) by Amy Hoy. Amy's post explains, more clearly than I can right now, a big part of what motivated me to write [mdsite](https://benchristel.github.io/mdsite/) from scratch instead of using an off-the-shelf blogging tool. And if you're looking for something more recent and with less CSS, Mike Grindle's been writing about [the woes of timeline-based social media](https://mikegrindle.com/newsletter/itm-1) and [the limits of novelty and fun](https://mikegrindle.com/posts/novelty).

And oh, that reminds me: The [Wayward Webring](https://waywardweb.org/) welcomed _four_ new members since my last update! You should definitely check out all their sites:

- [EGGRAMEN](https://eggramen.neocities.org/elsewhere/links)
- [Mike Grindle](https://mikegrindle.com/)
- [imladris](https://braigwen.neocities.org/linklist)
- [Tom's Homepage](https://ttntm.me/bookmarks/)

<h2 id="2024-08-11-site-tidying">August 11, 2024: Site Tidying</h2>

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

<h2 id="2024-08-04-the-mess-were-in">August 4, 2024: The Mess We're In</h2>

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