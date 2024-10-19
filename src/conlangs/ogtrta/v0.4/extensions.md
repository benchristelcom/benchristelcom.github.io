# Extensions

So far, we have not discussed any of the language features you'd likely encounter in a grammar textbook for a typical human language: plurals, verb tenses, pronouns, etc. Those features are not part of OGTRTA proper; they are left up to the individual language designer.

One of the nice things about OGTRTA is that it provides a consistent backdrop against which to compare different implementations of various language features. Using OGTRTA, we can clearly see how different implementations make tradeoffs between conciseness, flexibility, and ambiguity.

Still, it can be somewhat tricky to figure out how to work some of these features into an OGTRTA language without disrupting the syntactic and lexical architecture that OGTRTA provides. This page aims to solve that problem with how-to guides and examples.

## General strategies

### Semantic roles

A noun or verb can be thought of as having a number of _syntactic slots_ which can be filled by complements. Verbs typically also have a syntactic slot for a subject NP. Each syntactic slot is associated with a _semantic role_ which defines how the complement in that slot relates to its complend. The semantic roles are lexically determined by the complend — that is, they are part of the dictionary meaning of the complend.

For example, a verb like `give/2` might have the following syntactic slots:

```
give/2   __________ __________ _______
complend complement complement subject
         gift       recipient  giver
```

That is, the complement noun phrase in the first slot following `give/2` plays the role of _gift_, the next complement plays the role of _recipient_, and the subject plays the role of _giver_.

As discussed below in the section on [recommended verbal morphology](#verbal-morphology), derivational affixes on a verb can rearrange the semantic roles of its slots. For example, by applying a middle-passive inflection to `give/2`, we might obtain the following structure:

```
give-MIDPASS/1 __________ _______
complend       complement subject
               recipient  gift
```

The `MIDPASS` inflection causes the subject role to disappear. The first complement's role is moved to the subject slot.

Or, we might use a middle-voice inflection to remove all complements:

```
give-MID/0 _______
complend   subject
           giver
```

### Affixation

### Subordination

### Null morphemes

## Recommended Morphology

OGTRTA proper has no opinions about morphology. However, there are certain morphological patterns that I have found to work well with OGTRTA. Those are outlined here.

### Verbal morphology

- The dictionary form of verbs is the active participle.
- There is a set of [valence changing affixes](#valence-changing) that mark the passive, middle, and causative voices.
- Finite verbs (those that are the main verb of a sentence) are marked. They may be marked for tense as well as finiteness.
- There is some way of nominalizing verbs (creating gerunds or infinitives).
- There is [some way to disambiguate](#modifier-disambiguation) which head a modifier attaches to.

## Subject motion (SVO/OVS word order)

## Subject-as-modifier (VSO/OSV word order)

## Ergative alignment

## Sentence-level modifiers

## Adconjunctions

## Modifier disambiguation

- Marked adverbs and adconjunctions
- First-modifier marking
- Last-modifier marking
- Agreement
- Head-marking

## Determiners

## Grammatical number

## Adjectives

## Prepositions

## Tenses

## Negation

## Pronouns

## Possessives

## Valence-changing

## Verb nominalization

## Imperatives as NPs

## Questions as NPs

## Trace pronouns

## Relative clauses

Relative clauses can be implemented in terms of nominalized sentences:

- **Go a-consa studior o que li a-fala Latina.**<br>
  `1SG PRS-know student of  NOM he  PRS-speak Latin`<br>
  `PRN V/1      N       V/1 NOM PRN V/1       N`<br>
  _I know a student who speaks Latin._

Here, the pronoun **li** "he," which refers back to **studior** "student," is left in place in the subclause. In this hypothetical language, you'd say, in effect, "I know a student such that he speaks Latin."

This is nice and regular syntactically, but it's a bit wordier than many natural languages.

To get a system closer to how English works, you could do the following:

- Implement questions using special interrogative nominalizers as described [above](#questions-as-nps).
- Use a [trace pronoun](#trace-pronouns) for the questioned element.
- Realize the trace pronoun as a [null morpheme](#null-morphemes)
- Use a special relativizing verb, realized as [null](#null-morphemes), to let questions modify nouns.

That all sounds rather abstract, so let's look at an example:

You'd form the question "Who speaks Latin?" like this:

- **Qui a-fala Latina?**<br>
  `qui ∅     a-fala    Latina`<br>
  `who TRACE PRS-speak Latin`<br>
  `NOM PRN   V/1       N`<br>
  _Who speaks Latin?_

And you'd turn that into a relative clause like this:

- **Go a-consa studior qui a-fala Latina.**<br>
  `go  a-consa  studior ∅   qui ∅     a-fala    Latina`<br>
  `1SG PRS-know student REL who TRACE PRS-speak Latin`<br>
  `PRN V/1      N       V/1 NOM PRN   V/1       N`<br>
  _I know a student who speaks Latin._

Two null morphemes in one noun phrase! Is there nothing [nothing](#null-morphemes) can't do?

## Demonstratives

Demonstratives like "this," "that," "these," "those" can be represented in a few ways:

- as [determiners](#determiners)
- as adjective-like zero-valence verbs
- as noun affixes.

- **ti domo, ta domo** "this house, that house" (where **ti** and **ta** are determiners)
- **domo tia, domo toa** ditto (where **tia** and **toa** are verbs)
- **domito, domato** ditto, **-it-** and **-at-** are deictic infixes

## Numbers

Cardinal numbers can be expressed in a few ways:

- They can be [determiners](#determiners), as in English.
- They can be adjective-like zero-valence verbs.
- They can be nouns,

Example of numbers-as-determiners:

- **ter ovihi**<br>
  `three sheep-PL`<br>
  `DET   N`<br>
  _three sheep_

Example of numbers-as-verbs:

- **ovihi tera**<br>
  `sheep-PL three`<br>
  `N        V/0`<br>
  _three sheep_

Example of numbers-as-nouns:

- **ter o ovihi**<br>
  `three of  sheep-PL`<br>
  `N     V/1 N`<br>
  _three sheep_

In choosing among these, consider how elisive phrases like "I bought three" will work. All the options but numbers-as-nouns require a dummy word (glossed `unit` below) to make the syntax work:

- **Go fe-cobra ter umi**<br>
  `1SG PST-buy three unit-PL`<br>
  `PRN V/1     DET   N`<br>
  _I bought three._
- **Go fe-cobra umi tera**<br>
  `1SG PST-buy unit-PL three`<br>
  `PRN V/1     N       V/0`<br>
  _I bought three._
- **Go fe-cobra ter**<br>
  `1SG PST-buy three`<br>
  `PRN V/1     N`<br>
  _I bought three._

The dummy word can of course be a [null morpheme](#null-morphemes).

Ordinal numbers can work similarly.

Ordinals-as-determiners:

- **terser domo** "(the) third house"

Ordinals-as-verbs:

- **i domo tersera** "the third house"

I don't think ordinals-as-nouns makes sense, but maybe I'm wrong about that.

## Inchoative and cessative

Prepositions "to" and "from", and variants like "onto" and "from out of" can be replaced by inchoative and cessastive inflections of other prepositions. E.g. "to" can be `at1#INCH`. "for" (dative) can be `of1#INCH`.
