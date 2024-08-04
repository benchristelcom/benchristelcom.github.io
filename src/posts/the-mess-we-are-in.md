# 2024-08-04: The Mess We're In

In this next series of posts, I'm going to try to explain a) what I've been working on for the past couple of months, and b) why. But in the opposite order. This post will start to unpack the "why," beginning with the problem I'm trying to address.

## Software Development as Learning

I have come to view "software development" as
a special case of "systems learning to do new things." To program is to teach a computer how to do something. To refactor a program, or test it, or document it, is to encode our knowledge of what the program does and how to make further changes to it — hopefully in a way that our future selves and teammates can understand. A human-software system is healthy to the extent that the knowledge encoded in it makes the system more effective at doing what it needs to do.

[Elsewhere](https://github.com/software-patterns/workshop/blob/master/patterns/test-loving-architecture.md), I wrote:

> To build steadily on our abilities, step by step—that is the goal of engineering.

What I meant by this is that when we're programming, everything we do should add to our capabilities — every step should enable the human-computer system to do more. This seems obvious, but it's easier said than done.

> Too often we become mired in intellectual traps of our own making. The complexity of the systems we build weighs on us until, with a sigh, we throw the whole mess away and start over.

When I wrote this (five years ago), I was thinking of "legacy code" — a term that has come to mean "messy, disorganized code written by someone else, often without any tests."

But more recently, I have noticed that even when individual programs are well-tested and well-designed, the legacy code problem rears its head at larger scales.

## The problem is finding stuff

I am starting to feel that my ability to organize and preserve knowledge is becoming the bottleneck on how much I can accomplish. In other words, knowledge I've encoded is decaying (losing its usefulness) as fast as I can encode new knowledge. In order to actually become more capable as a one-man human-computer system, I need to slow the decay.

I tell people I'm [writing a book](https://benchristel.github.io/process-to-processes) — but by volume, I've already written one. Several hundred pages of drafts, scattered over git repos and wikis and Google docs. The problem is, no one can use any of that raw material until it's organized. And _I_ have lost track of where it all is.

It's not just me. Even Joe Armstrong (inventor of Erlang) had this problem. In 2014, he gave a talk at Strange Loop titled ["The Mess We're In"](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=lKXe3HUG2l4). There's a lot of interesting ideas in that talk, but the part that stuck with me was the most down-to-earth: _Joe Armstrong can't remember where he put his programs._ He's written some code. He wants to reuse it in a new project. How can he find it? Where is it? What was it called? This isn't like forgetting where you put your keys. In 2014, he was the author of no fewer than 25,000 Erlang modules (estimated). So the scale of the problem is a little bit different.

When I first saw this talk, I thought that having 25,000 Erlang modules would be a pretty good problem to have. But now _I'm_ losing track of the code I've written on my multifarious side projects, and it isn't so funny anymore. I don't think I've written 25,000 things yet, but then again, my brain probably isn't as big as Joe Armstrong's.

And it's not just individual programmers who are having this problem. The _whole web_ is suffering from a similar problem of forgetfulness, and at a much larger scale.

It's becoming kind of a cliché for bloggers to complain about the death of the web — how it's being overrun by commercial sites, evil social networks, SEO spam, and AI-generated nonsense — so I won't harp on it. If you'd like a summary of the situation, [here's a good (optimistic) take by Molly White](https://www.citationneeded.news/we-can-have-a-different-web/). I have one nit to pick, though. Molly says the good old web is mostly still there, and we could go back to it if we want. I think this is a bit like saying that a city flooded with eight feet of raw sewage is "still there." The buildings and streets might still be structurally sound, but no one can live there — no one can even get to the front door.

The question is not what still _exists_ on the web, but:

- what we can find
- where community is happening

If we think we can rely on Google and generative AI to find the things we really care about, I fear we are wrong. It's not just that Google's incentives are misaligned with our goals: it might not be technically _possible_ for search engines to weed out the AI spam from their results, even if they wanted to.

In other words, the web, as a human-computer system, has forgotten what it once knew. Once, we taught the global interconnected network of computers how to organize and share and search for information. Once, we taught it to connect people. _We_ programmed it — not just in code, but in language and links. _We_ taught it what was good and what was relevant, what was fact and what was fiction; we gave it form, shape, and order. But then, Google piggybacked on all that work to build a search engine, and search worked so well that everyone became dependent on it. And then these damned AIs showed up, and filled Google's results with funhouse-mirror mockeries of our work, and now, where once was order, we have a mess.

In this next series of posts, I want to stew in this problem a bit, to settle into it and get a feel for its shape. I think it's solvable, but the solution will take a bit of work. Stay tuned.

_I recently learned that my Substack has an [RSS feed](https://bensguide.substack.com/feed). Hat tip to [Gavin Morgan](https://gavmor.com) for pointing that out. So if you want to subscribe to my newsletter via RSS, you can! `https://bensguide.substack.com/feed`_.
