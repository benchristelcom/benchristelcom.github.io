# Extensions

So far, we have not discussed any of the language features you'd likely encounter in a grammar textbook for a typical human language: plurals, verb tenses, pronouns, etc. Those features are not part of OGTRTA proper; they are left up to the individual language designer.

It can be somewhat tricky to figure out how to work some of these features into an OGTRTA language without disrupting the syntactic and lexical architecture that OGTRTA provides. This page aims to solve that problem with how-to guides and examples.

## General strategies

### Affixation

### Subordination

### Null morphemes

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

## Relative clauses

## Trace pronouns

## Demonstratives

## Numbers

Cardinal numbers can be expressed in a few ways:

- They can be [determiners](#determiners), as in English.
- They can be adjective-like verbs.
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
