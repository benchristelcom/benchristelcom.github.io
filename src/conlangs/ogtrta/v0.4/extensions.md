# Extensions

So far, we have not discussed any of the language features you'd likely encounter in a grammar textbook for a typical human language: plurals, verb tenses, pronouns, etc. Those features are not part of OGTRTA proper; they are left up to the individual language designer.

One of the nice things about OGTRTA is that it provides a consistent backdrop against which to compare different implementations of various language features. Using OGTRTA, we can clearly see how different implementations make tradeoffs between conciseness, flexibility, and ambiguity.

Still, it can be somewhat tricky to figure out how to work some of these features into an OGTRTA language without disrupting the syntactic and lexical architecture that OGTRTA provides. This page aims to solve that problem with how-to guides and examples.

## General strategies

### Affixation

### Subordination

### Null morphemes

### Post-serialization processing

- contractions, etc.

## Recommended Morphology

OGTRTA proper does not dictate any particular morphology. However, there are certain morphological patterns that I have found to work well with OGTRTA. Those are outlined here.

### Verbal morphology

The dictionary form of verbs is the active participle. This allows adjective-like and preposition-like verbs to modify other words with no special inflection.

A verb used as the predicate (main verb) of a sentence is marked, usually with a morpheme glossed `FIN` (finite), or with a tense marker.

I tend to mark only finite verbs for tense. However, you might want to consider whether participles should also have past, present, and future tenses, as in Esperanto.

The infinitive form of a verb (`INF`) converts it to a noun, keeping its valence the same. The gerund (`GER`) is similar, but has a valence of zero: all complement slots are removed. `GER` is thus equivalent to the composition of `MID` (see below) and `INF`. Since I usually

I usually have a set of [valence changing affixes](#valence-changing) that mark the passive, middle, and causative voices. The active voice is unmarked.

- The middle voice removes all complements and converts the verb to a zero-valence verb. Example: **I pulo cuica pesco** "The boy cooks fish" (active voice) &rarr; **I pulo cuicas** "The boy cooks" (middle voice).
- The passive voice swaps the subject and complement of a valence-1 verb.
- The middle-passive voice removes the original subject, and promotes the first complement to subject position.
- The causative voice demotes the subject to first complement, and adds a new subject (the cause).

A bit more detail on how this works:

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

### Modifiers

Because OGTRTA languages tend to be either consistently head-initial or head-final, the modifiers of multiple heads frequently get stacked on top of each other, making it hard to see which modifiers go with which head. I like to have [some way to disambiguate](#modifier-disambiguation) which head a modifier attaches to. There are a few strategies for doing this:

- A morpheme that marks a modifier immediately following its head (a "first modifier") glossed `M1`.
- An adverbial affix, which marks modifiers of verbs. If your language has [adconjunctions](#adconjunctions), you might mark those too.

You could also use some form of noun class agreement, but I find that that creates more problems than it solves.

[Interfixed modifiers](#interfixed-modifiers) can help solve some ambiguity problems.

### Noun morphology

I find that requiring nouns to be marked for number leads to awkward situations where you don't know if something should be singular or plural. (In written English we have constructions like "car(s)" and "child(ren)" to deal with these situations, but there's no convenient equivalent in the spoken language.)

The solution is to let the dictionary form of a noun be [transnumeral](https://en.wikipedia.org/wiki/Grammatical_number#Transnumeral). Number marking is required on definite nouns only. I like to do this by having two definite articles, one for singular and one for plural. Number can optionally be indicated for indefinite nouns with a [numeral](#numbers) ("one") or a modifier ("many", "several").

### Numbers

I find it convenient to make numerals **nouns**; this makes elisive phrases like "I ate four" and arithmetic ("three plus two is five") work grammatically with no additional complications.

To express ideas like "three apples" you'd use a preposition-like verb: "three of apples". The same preposition can also naturally be used for multiplication: "five of three of apples makes fifteen apples".

### Summary of morphemes

- `FIN` - finite
- `INF` - infinitive
- `GER` - gerund
- `M1` - first modifier
- `ADV` - adverb
- `ADC` - [adconjunction](#adconjunctions)

## Subject motion (SVO/OVS word order)

To create an SVO language, start from the standard VOS word order described on the [syntax](./syntax.md) page, and add the following syntax rule:

```
S -> NP VP
```

That is, a sentence can consist of a subject noun phrase followed by a verb phrase.

To make an OVS language, reverse all the syntax rules as described in the section on [reversibility](./syntax.md#reversibility).

## Subject-as-modifier (VSO/OSV word order)

To create a VSO language, start from the standard VOS word order described on the [syntax](./syntax.md) page, and replace the expansion rules for `S` nodes with the following:

```
S -> NP
   | VP
   | S CONJ S
```

The subject of a verb can then be expressed by a modifier phrase attached to the verb. The head of this modifier phrase can be a [null morpheme](#null-morphemes).

- **A-fala go Latina.**<br>
  `a-fala    ∅   go  latina`<br>
  `PRS-speak SBJ 1SG Latin`<br>
  `V/1       V/1 PRN N`<br>
  _I speak Latin._

To create an OSV language, reverse all the syntax rules as described in the section on [reversibility](./syntax.md#reversibility).

## Sentence-level modifiers

Sentence-level modifiers can provide attitudinal or evidential information: "Supposedly, Hamlet saw the ghost last night"; "Luckily, no one noticed us".

To add sentence-level modifiers to OGTRTA, add the following syntax rule:

```
S -> VP S
```

Optionally, you can allow sentence-level modifiers after the main clause, though this will create ambiguity unless you have some kind of [modifier disambiguation](#modifiers).

```
S -> S VP
```

To disambiguate modifier attachment, you can mark sentence-level modifiers that follow their modifiee. One way to do this is to separate the clauses with a sentence particle (glossed `SP`). You might also mark sentence-level modifiers with a morpheme `ADS` (adsentence) or `SM` (sentence modifier) (note: these glosses are nonstandard).

## Adconjunctions

## Determiners

## Interfixed modifiers

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
