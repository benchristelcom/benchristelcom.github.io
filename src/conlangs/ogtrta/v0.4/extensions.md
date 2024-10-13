# Extensions

So far, we have not discussed any of the language features you'd likely encounter in a grammar textbook for a typical human language: plurals, verb tenses, pronouns, etc. Those features are not part of OGTRTA proper; they are left up to the individual language designer.

One of the nice things about OGTRTA is that it provides a consistent backdrop against which to compare different implementations of various language features. Using OGTRTA, we can clearly see how different implementations make tradeoffs between conciseness, flexibility, and ambiguity.

Still, it can be somewhat tricky to figure out how to work some of these features into an OGTRTA language without disrupting the syntactic and lexical architecture that OGTRTA provides. This page aims to solve that problem with how-to guides and examples.

## General strategies

### Affixation

### Subordination

### Null morphemes

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

Two null morphemes in one noun phrase! Is there nothing nothing can't do?

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
