# Code Quality: Hidden Costs, Unexpected Benefits

I spend a lot of time thinking about why there's so much bad code in the world, and what we can do about it. I hypothesize two reasons code quality tends to degrade:

- The costs of poor code quality are hard to see, because of how quality shapes decisions at the organizational level.
- Executives and managers don't have the detailed knowledge they'd need to reap the benefits of good code. A strictly command-and-control organization can't take advantage of code quality; teams and individuals need local agency. Such an organization has little reason to prioritize code quality, and little hope of doing so effectively.

These certainly aren't the only two causes of bad code, but they're the ones I'll focus on in this post.

[^blame-a-programmer]: Note that I am blaming _software developers_ for this, not software companies. I believe most "schedule pressure" is internal, born out of a sense of alienation from the work and a desire for it to be "over" (though of course it's never over) and exacerbated by a habit of estimating work effort based on vibes instead of data. However, that is a debate we can have some other time.

## Hidden Costs

Imagine you have two computers: an old clunker, and a new, top-of-the-line machine. The reason you keep the old computer around is that it runs business-critical software that would be too difficult to port to the new computer. Still, you try to touch it as little as possible, doing most of your work on the new computer.

The old computer is slow and annoying to use. When you're using it, it _feels_ like it's costing you a lot of time. However, when you look objectively at how much time you're actually spending with it, you realize it's not actually _that_ much time, in the scheme of things. You touch the old computer so infrequently that the inefficiencies don't add up to much.

Now, here's the thing: if the old computer were faster and easier to use, you'd use it more. You use it infrequently _because_ it's inefficient. The behavior of the larger system (you plus the two computers) has adjusted to accommodate the relative efficiencies of each subsystem.[^jevons]

[^jevons]: In effect, you've solved the [two-arm bandit problem](https://en.wikipedia.org/wiki/Multi-armed_bandit). I'm also reminded here of the [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox). Jevons' paradox (which is not actually a [paradox](https://www.youtube.com/watch?v=ppX7Qjbe6BM), just an observation) predicts that reduced efficiency of a system will lead to decreased usage of that system _and an overall decrease in costs relative to what would be spent on a more efficient system_.

Software companies operate similarly. When a part of the codebase gains a reputation for being {{link terms/legacy-code "legacy code"}}, everyone tries to find ways to avoid touching it. Shims are inserted; substitutes are devised. Whenever possible, behavior is implemented somewhere else.

This leads to a vicious cycle: avoidance of legacy code just causes weird architectural decisions in other parts of the codebase, turning _them_ into legacy code too. But the process is gradual. In the meantime, software development can continue, and the company can keep making money.

More perniciously, bad code directs attention and effort away from certain opportunities. If a feature or product doesn't "pencil out" — if the cost of implementing it would be impractically high, due to poor code quality — then it will never get worked on. In this situation, the cost of changing the bad code will never be paid, but the potential value of the feature won't be realized either.

So it's not that poor quality has no cost. The costs are simply invisible, because they show up as a _decrease in value_ rather than an _increase in expenses_. How do you measure the cost of _not_ working on code, of _not_ building a feature, because it would be too expensive or risky to try? How do you even notice it? The problem is made worse because working in this kind of environment for a long time can cause a kind of [learned helplessness](https://en.wikipedia.org/wiki/Learned_helplessness), where you don't even see the opportunities that _are_ available to you.

What's a responsible engineer to do in such a situation? Follow the Scouts' rule: no matter what code you're working on, **leave it better than you found it.** Or at least, don't make it worse. Although remediating the bad code _now_ might not make economic sense, _preventing_ it in the past would have (if only we had a time machine). We can't undo those past decisions, but we can start making better ones.

## Unexpected Benefits

A few months ago, Kent Beck wrote an executive summary of his book _Tidy First_, titled ["The Surprise Factory."](https://tidyfirst.substack.com/p/the-surprise-factory) The idea of the Surprise Factory is that tidy code produces delightful surprises, in the form of unexpected opportunities to add value to the company. (Kent later decided that "surprise" had too many negative connotations, so he changed the name to "The Gift Factory.")[^gift]

[^gift]: I tend to think that "Gift Factory" has its own problems: software isn't a _gift_, it's literally what the company is _paying you for_. I suggested "Opportunity Factory" as an alternative, but "Gift Factory" won out.

Here's the problem that arises when this theory meets practice: although high code quality _does_ produce opportunities to add value, executives can't see _which_ specific opportunities are present. Code quality is not a scalar value; "good code" cannot make _every_ imaginable change equally easy.[^surprise] Rather, we call code "good" when it can meet the _specific_ demands placed on it. But executives aren't looking at the code, and can't see which specific demands it might be capable of meeting. The opportunities presented by the Surprise Factory are thus invisible to them.

[^surprise]: Indeed, this is why the surprise factory is a _surprise_ factory. You often don't know in advance what economic value you'll get (if any) out of a given improvement in code quality. Code quality is an exercise in making lots of little bets, some of which pay off big.

Without a detailed understanding of the code, executives and managers only have a few crude knobs to turn: one knob might be labeled "more ambitious / less ambitious". Another knob might adjust which parts of the codebase or the product receive the most development effort.

The crudeness of these controls all but ensures that code quality will degrade over time. If executives respond to a high-code-quality, high-opportunity environment by simply turning up the "ambition" knob and directing effort toward the highest-quality parts of the codebase, the code will be ruined by developers trying to hit deadlines: it's unlikely that the opportunities coming out of the Surprise Factory will align perfectly with the the plans that trickle down from the executives' vision. But turning the knobs the other way would be folly: you'd burn out your programmers by making them work on the cruftiest code, and you'd have little to show for it in the end.

Again, what's a responsible engineer to do in this situation? I've come to the conclusion that it's _my_ job to reveal value-adding opportunities to my employer, so they can take advantage of the surprise factory. I do this in a few ways:

- I suggest features that I think would be easy and valuable to add.
- When my team is estimating stories, I point out cheaper alternatives to the proposed design.
- I make delivery forecasts based on data, not vibes.[^guess]
- I cut out low-value work where possible.

[^guess]: See Nat Bennett's post, ["You don't have to guess to estimate."](https://www.simplermachines.com/estimates-arent-guesses/) The easiest way to estimate: break down your project into a to-do list of feature improvements, each small enough to fit in your head. Every week, count the things remaining on your to-do list. (_Not_ how many things you got done! A topic for another post.) The average weekly change is your velocity. Divide the current length of your to-do list by velocity, and that's roughly how many weeks it will take to finish the project.

One caveat to this recommendation: in order to pull it off, you need design and product skills as well as engineering skills. Nothing's more annoying than a programmer who won't shut up about the weird feature or design idea that they want to shove into the product. However, it seems that the recent trend is for engineers to take on more design and PM responsibilities anyway — gone are the days of PMs writing Gherkin and designers insisting on pixel-perfection. For better or for worse, we programmers have the power now. We should learn to wield it.
