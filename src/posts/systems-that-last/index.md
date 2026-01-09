# Systems That Last

## Every system is either mortal or immortal

Almost all the useful systems are mortal — that is, all that are useful to people trying to do things in the real world. The immortal systems have been concocted by programmers to do programmery things.

Human-scaled systems are mortal to the extent that they change. Systems are forced to change by changes in their environment. Every change to the system causes compounding complexity that impedes further change. Eventually, the system either reaches a balance point where it no longer needs to change, or it collapses under the weight of its own accumulated cruft.

However, a useful (mortal) system can be built, in part, out of immortal systems. This saves time, and reduces the complexity of the mortal system.

There is (possibly only) one way to create a large, complex, useful system that has a chance of being immortal. That is to create an _ecosystem_. An ecosystem is a set of patterns and interactions that can accommodate the birth and death of myriad smaller systems.

The tree is mortal, but the forest is eternal. A building may stand for a thousand years before crumbling into rubble — but crumble it does. But a city is forever.

## Finding something to do

1. NOT problem-solving. People PAY for problems. It is rare that they will pay to get rid of one.
	1. Hobbies are problems. Video games are problems. Houses, pets, vacations, meals, and gardens are problems. When you reflect on your life, I think you will probably find that all the durable joys in it are in fact problems. Pleasures are fleeting and unreliable, but problems are solid and rich and nourishing. They are also the backbone of the American economy. If we all refrained from creating problems for ourselves and each other, there would be nothing for us to do, and we would all, sooner or later, find ourselves unemployed.
2. Instead, think in terms of capabilities. What can people do with your software that they could not do without it?
	1. Ask not what computer can do for human. Ask what human can do with computer. —misattributed to Jean Piaget

## Building a thing

3. Build the smallest valuable capability you can find. Define what you are building very clearly — not in terms of its purpose, for you cannot possibly know what purpose it will be turned to by its users — but in terms of its behavior, its functionality — what it actually does. We'll call this the Definition Constraint.
	1. The Definition Constraint applies throughout this guide: at every step, build only what you can clearly define. If you only have a vague sense of a concept, do not publish it. Do not write tests for it. If you can, avoid even naming it. Following this rule ensures that what you publish will be simple and easy to reason about; also, that it will not rot with age, but will serve soundly and faithfully until it is replaced — if indeed that ever happens.
4. If in the course of building the smallest valuable capability, you find that some even smaller capability would ease your labor, don't waste any time — shelve your original goal and build the smaller capability immediately. Recurse until you have built something tiny and complete. Then unwind the stack until you have built the thing you first set out to build.

## Finding the next thing

5. If you create a valuable problem for your users, they are likely to develop an appetite for another. Once they ask for it, don't respond by modifying the first thing you built. Instead, create companions for it. This is the heart of the Unix philosophy: build small tools that do one thing well, and work together.
6. To make tools that work together, make them unaware of each other. Each tool should be designed to interoperate with others as yet unimagined.
7. When tools need to communicate, use formats, protocols, or interfaces that are ignorant of specific implementations.
8. Users might ask for something that is a variation on the first thing you built — which we'll call Thing A. In this case, what users want is neither a trivial update to A nor a companion to it, but something with overlapping capabilities and a rather different design.
	1. Do not modify Thing A. Instead, build Thing B. Along the way, you might reuse some of the sub-capabilities you created during A's construction. In that case, you can just reuse your existing libraries. But you might also find that you're re-defining concepts from A, that are *not* yet published as libraries. When this happens, don't waste any time — shelve your work on B and create a library for the shared concept.
9. Never break backward compatibility with existing client code — even in a major release. If you need to make a breaking change, release a new module with a new name. It is better to create a wholly new thing and deprecate the old one than to publish two modules with different interfaces under the same name, and risk confusing clients. Python made the mistake of taking the latter approach, and cost us all a decade of misery.

## Summary

This manifesto, if I may call it that, describes an application of the Open-Closed Principle at scale. The Open-Closed Principle, in object-oriented programming says that classes should be open for extension but closed for modification. That is, classes can be built upon by subclassing them, or by composing them with collaborators, but should not be modified once published. This is a good idea — though I'm not sure applying it at the class level is such a good idea, anymore — but it is a good idea at the level of libraries, modules, and programs.
## Worked example

## Why don't we work this way?

Building software this way demands patience. It requires that we be able to spend entire *weeks* researching, refactoring, and talking to users, in order to save mere _years_ of those users' time. This is a difficult proposition to sell. If one million users each suffer a delay of one minute, that amounts to 1.9 person-years of lost time. Not much, for an immortal.
