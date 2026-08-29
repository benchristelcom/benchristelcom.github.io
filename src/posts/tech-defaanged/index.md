# Tech DeFAANGed

***tl;dr*** the focus of my writing has shifted. I've started a new blog,
[_DeFAANGed_], where I'll be writing about tech addiction and the phenomenology
of computer use. I might still post to Ben's Guide occasionally, but if you
want to follow what I'm up to, _DeFAANGed_ is the best place.
[You can subscribe here](https://defaanged.mataroa.blog/newsletter/).

[_DeFAANGed_]: https://defaanged.mataroa.blog/

This post is going to be sort of a self-indulgent ramble. I'm sorry about that,
but I needed the catharsis, and I thought you might like some explanation of
why I'm not primarily going to be writing about software development anymore.

Back when [GeePaw Hill] was blogging regularly (boy do I miss those days!) he
used to begin every post with [something like this](https://www.geepawhill.org/2021/10/26/mmmss-a-closer-look-at-steps/):

[GeePaw Hill]: http://geepawhill.org/

> Tho I love my geekery, I don’t love it as much as the world. Here’s comfort
> food for today, take a break, enjoy this thread, but please stay in the
> largest game: actual social change.
>
> _We can fix this world, folks. We’re the only thing that can. Black Lives
> Matter._

The gist was always: there are bigger issues than whatever problems we might
have in software development. Take comfort in nerding out about computers when
you can, but don't forget to take action in the world beyond the screen.

It's a lovely message, and it's one that's been on my mind a lot. There's
certainly no end of  wrongness in the world these days. Recently, though,
writing about computers hasn't tasted like comfort food. To me it tastes more
like poison. Software is no longer just a fun puzzle or a cute distraction.
It's at the epicenter of all our biggest problems.

I've been critical of the status quo in the tech world for a long time. Years
ago, I thought the problems were mostly technical and could be solved with
better techniques. Later, I realized that while many of the symptoms showed up
as technical issues, the underlying disease was largely cultural. And within
the last few months, I've found myself surveying this mindless, malignant
cancer of an industry and asking myself, "wait, why are we keeping this thing
alive, exactly?"

As a result of this despair about the state of the software industry, I haven't
been writing much. I don't lack for ideas — get a cup of coffee in me at 7 AM
and I'll hand you half a dozen half-baked thoughts about programming — but every
time I sit down to draft a blog post there's this nagging little voice in the
back of my head going *"this isn't the most important story. Tell them the most
important story."*

So I finally broke down, accepted that the nagging voice in my head was not
going to go away, and wrote _that_ post. This is it: the most important story,
the most interesting one I can think to tell you, and the one you'll probably
never read anywhere else, because, quite frankly, it isn't good for engagement.

I suppose I should back up and start this story from the "beginning," if indeed
it has a beginning. You've read this far, so I'll assume you're invested enough
for that.

About two years ago, in the summer of 2024, I could see that web search was in
trouble. LLM-based chatbots were both stealing traffic from search engines and
websites, and polluting the web with spam and nonsense. It was getting harder
and harder to find good results on Google and DuckDuckGo. The kicker was that
by destroying search, the chatbots were poisoning their own well: their
"research" and "summaries" could only ever be as good as the webpages turned up
by search engines. I concluded that the end of search as I knew it was imminent,
that the end of chatbots would soon follow, and that I would have to take
measures to protect myself from their collapse.

(Was I right about this? Well, I just searched for "balanced abstraction
principle" on DuckDuckGo, a query that has turned up a lot of AI spam in the
past, and was pleasantly surprised! The top two results are blog posts from
Sandro Mancuso — good! The third result is Wikipedia. In fact, the spammiest
result on the whole first page was from LinkedIn. So maybe they've solved that
half of the problem, at least? Anyway, whether I was right about the demise of
search is not the point of this post, so don't stop reading yet.)

*How do you have a functioning internet without search?* Well, before there was
search, people had *links*, and they had big pages full of links called *web
directories*. I couldn't think of a better idea, so, as a first step, I made a
big webpage that linked to all of the sites I was afraid of losing in the
unsearchable labyrinth of the future web. I call it my "[Web Portal]".

[Web Portal]: https://benchristel.com/portal/

![the Web Portal: a 2010s-style page with a calming blue background, a
watercolor landscape painting of a house in the header, a search bar, and a big
list of links](web-portal.png)

I knew that this project was too big for one person. So I looked around for
other folks on the web who were maintaining big pages full of links. I contacted
several of them, and started organizing a webring of all of our link pages. I
put up a signup form, too. The webring started growing, and my Portal kept
growing along with it. I felt pretty good. I felt like if it kept on going this
way, I could bootstrap my own little search engine from the webring — a search
engine covering *just* the slice of the web that a small community of humans
actually cared about.

I didn't actually do that, though, because first things had to come first.
First, I needed some metrics.

To measure how well I had prepped for the Webocalypse, I started keeping track
of how many web searches I did every month. The hypothesis was that the fewer
searches I needed to make, the better the portal was working. Fewer searches on
DuckDuckGo and Google meant that my link collection could get me wherever I
needed to go.

Alas, I should have foreseen what would happen. I should have known. I fell
into the very same trap that I have been warning other people about for years.
*Goodhart's Law.*

> When a measure becomes a target, it ceases to be a good measure.
>
> —[paraphrase of Goodhart's Law by Marilyn Strathern ](https://en.wikipedia.org/wiki/Goodhart's_law)

In other words, when you want a number to go up (or in this case, a number to
go down) you are going to *intentionally change* your behavior to do more of
the things that move the number the way you want, and less of the things that
move it the other way, *whether or not those things actually correlate with the
benefits you were trying to measure using the number as a proxy*.

To take a simple example from software development: let's suppose my manager
mandates 90% test coverage for all new code. I'll hit that 90% target — even if
the tests are meaningless, even if I have to chop up the code into nonsensical
functions. Even if the tests don't have any real assertions, sometimes! Why
waste time writing *assertions* when what you need is *coverage*? That is the
kind of counterproductive behavior that Goodhart's Law predicts, and I've seen
it play out time and time again in the real world.

Anyway, back to my webocalypse-prepping experiment: I didn't account for
Goodhart's Law when designing my metrics. And so I started *intentionally
avoiding search* in order to make the numbers look good. This naturally led to
me spending less time online. *That* naturally led to me using computers less.
What had started as a strategy for self-defense against a collapsing web
devolved into pointless metrics-chasing. My project seemed to have gone off the
rails.

But then, a funny thing happened. I noticed that I was becoming happier.

At first, the effect was very slight, the change very gradual. But just within
the last few months, it hit a tipping point. Less time spent with computers
meant fewer frustrating experiences with bad software. Fewer frustrations meant
less writing and programming to try to "fix" the problem. Fewer interactions
with emotionally charged blog posts and videos meant less anxiety, less
dissatisfaction, less seething restlessness, less hunting around for
_something, anything, to do about it_. I picked up other hobbies — reading,
piano, meditation — and they started taking up more and more of my day. I thus
found myself at the center of multiple reinforcing feedback loops, all
interlocking, all pointing toward the same conclusion: *stop doing computers*.

And a few weeks ago, it was like a switch flipped in my brain. Something
snapped, and all of a sudden, my subconscious mind was like "okay, yeah, let's
stop doing computers."

For ten days, I just *forgot* to boot up my personal laptop. I *forgot to want*
to do anything that required a computer.

I'm back online, for the moment, because I felt it was important to share this
strange experience with you. I felt it was important to give you a window into
this vanishingly rare insight, discovered by accident — an insight that, thanks
to [selection bias](https://en.wikipedia.org/wiki/Selection_bias),
approximately no one online is ever going to tell you about.

The insight itself has two parts to it. The first part is not something that
fits into words all that well. The best I can do is to say: **computers are
just not that important**.

(Side note: Throughout this post, I use "computers" as a shorthand for
"personal desktops, laptops, tablets, and phones." I've never owned a
smartphone, so most of my experience is with the first two form factors, but I
hope you can see that there are all roughly equivalent devices. I'm explicitly
_not_ talking about computers used for business, financial, or scientific
applications.)

<!--
Having experienced a relatively-offline life — and enjoyed it — I can no longer say with full-throated confidence that creating software for personal computers is a pursuit that's worth my free time. I just can't believe in it anymore.
-->

This machine is, fundamentally, a fancy typewriter glued to a fancy calculator
glued to a fancy television. It is *not worth* getting worked up about. It is
*not worth* building a lifestyle around. It is not a revolution. It is not a
political statement. It is not a religion. It is not worth my hope or fear or
love. It is not worth every waking moment of my life, and it is most
*definitely* not worth [30 trillion dollars](https://garymarcus.substack.com/p/anthropics-30-trillion-fantasy).

That brings me to the second half of the insight: I realized that my relationship with
technology prior to this point was *way* less healthy than I thought it was.
Back in, say 2016, I *knew* I had an unhealthy relationship with Facebook. In
2022, I *knew* I had an unhealthy relationship with YouTube. I kicked those
habits, eventually. But what I didn't fully appreciate was that, over the
following years, the broader cult of technology took their place, and I became
dependent on it. I thought of digital technology as _the most important thing_.
It's not.

<!--
I'm not making a moral argument. I'm not trying to shame anyone for liking computers. I am making a pragmatic argument, a hedonistic argument. I am *happier*, I am more at peace with myself and the world, because I see computers as just a boring tool now. I don't think they're useless, I just think they're worth closer to 30 minutes a week of my time than 30 hours. I can use all that time for other things.
-->

I now look at my computer the same way I look at my food processor. I *like*
having a food processor. I use it approximately every week to make [hummus],
and though I can imagine living without that luxury, I think it would be a
slightly poorer existence. But I'm not going to spend 30 hours a week hunting
for opportunities to mash stuff up in my food processor. I think that would be
pretty weird. No judgement if that's your thing, but I have a really hard time
believing that 99% of the population would be into that. So it feels *very
incongruous to me* that I used to spend as much time with computers as
I did, given how niche and occasional their actual utility is. And when I see
how obsessively other people use their computers (or phones, usually), I can't
help but think "that can't possibly be the correct dose."

[hummus]: https://benchristel.com/recipes/hummus.html

This, then, is the source of my cognitive dissonance about computers. On one
level, I'm angry about the tech industry: about AI, about social media, about
data centers, about surveillance, about CEOs who want to replace all thought
and labor with mediocre simulacra. This is not the future we were promised, and
I want to help make it better. But on another level, I'm like: "It seems like
everyone hates this shit. *Why don't we just turn off all the computers?*"

Because as stupid as it sounds, I honestly think that would work. I honestly
think that would cure the tech industry's bullshit/psychopath problem. Just
turn off the computers! All the computers you have within arm's reach! Just
turn 'em off! Stop looking at ads! Stop searching! Stop scrolling! Because if
you stop scrolling, Google and Facebook and Microsoft and Amazon stop making
money. They stop being able to fund their dirty work. And at the same time, you
might just realize, as I did, that all of the problems you were trying to solve
with technology, all of the _needs_ you were trying to fulfill, all of the
cravings you were trying to satisfy — they were all caused by technology in the
first place.

Technology is a dissatisfaction machine. It is never complete, never quite good
enough, never perfectly functional, never finished. And it wants *you* to be
incomplete. That is how it powers itself. It feeds off your sense of
incompleteness. It fills you with desires and problems that you itch to resolve.
And how do you resolve them? More technology.

This entire gruesome circus — this [Karn Evil], to borrow a phrase
from Emerson, Lake & Palmer — is a self-referential loop. It's self-feeding,
self-perpetuating. But cut off the sink, and you cut off the source.

[Karn Evil]: https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=fLS0Med0s6E

So: turn off, turn away. It's a three-for-one deal, really. Political action
and self-defense against big tech in the moment; happiness and inner peace a
bit later; and if enough other people get the same idea, we all save the world.

The problem, of course, is that it's not that simple. Computers are addictive.
Software is addictive, *by design*. One does not simply quit. I know, because
I've been there. It's taken me _years_ to get to this point. Still, I am proof
that a person *can* quit. It isn't easy, but it can be done.

I sense the futility of trying to convey in mere words what I have learned by
experience. But words are all I have. So here I am writing, in the vague hope
that it will make a difference.

Anyway, that was a long-winded way of saying that I'm no longer particularly
motivated to write about programming. What I *am* motivated to write about
(clearly!) is my struggle with tech addiction and how I've (mostly) kicked the
habit, in the hope that reading about my journey might help someone.

I have therefore started a new blog, titled [_DeFAANGed_], where I'll be covering
topics like...

- How to block advertisements on mobile devices
- Where to buy stuff online that isn't Amazon
- How to make browsing the web suck less
- Why software companies are so dysfunctional
- The phenomenology of tech addiction and computer use
- Meditation and Hindu+Buddhist philosophy
- My weirder software projects, including the Web Portal and Culture Machine.

I hope to see you there. You can read more at [defaanged.mataroa.blog](https://defaanged.mataroa.blog/),
and [you can subscribe to _DeFAANGed_ by dropping your email here](https://defaanged.mataroa.blog/newsletter/)
or pasting `https://defaanged.mataroa.blog/` into your RSS reader.

<!---

I've lost count of how many times I've written and rewritten this post. I've had to cut out many tangents and gloss over some foundational ideas. So I've started a new blog, titled DeFAANGed, where I can explore the idea of _being less online_ a bit more. I don't know how often I'll be writing there. Most likely I'll do most of my writing offline and only post occasionally. But I have at least one substantial post up, with maybe more to follow.

_So I could get back to writing code_. Yeah, maybe that's what's changed. I haven't been working on personal projects, like, at all.

As you might have noticed, I haven't been writing much recently. Actually, that's not quite true: I've been writing plenty, I just haven't been hitting "send." I don't lack for ideas — get a cup of coffee in me at 7 AM and I'll hand you half a dozen half-baked thoughts about programming — but every time I sit down to write a blog post there's this nagging little voice in the back of my head going "*this isn't the most interesting story. Tell them the most interesting story.*"

So this is that post: the most interesting story in my life right now.

For the last c

I really haven't been using computers that much recently.

This is nominally a blog where I write advice about interacting with computers. Said advice is always based on my own experiences: what has worked for me, and, just as importantly, what hasn't. 

---
This question has arrived alongside a very strange feeling of negativity that I'm not sure how to classify. I wouldn't call it _burnout_. I'm enthusiastic about my day job, and I'm as "productive" (bleh) as I've ever been. I *look forward* to writing software that helps other people. Often, of a Sunday evening, I find myself wishing that Monday would hurry up so I could get back to work. Still, I haven't felt much like writing.

I'm also quite sure this isn't _depression_, a condition with which I have some acquaintance. I'm generally pretty happy these days, except for this one weird negative feeling about computers — let's call it *cognitive dissonance*, for lack of anything better.

[_DeFAANGed_]: https://defaanged.mataroa.blog/

-->
