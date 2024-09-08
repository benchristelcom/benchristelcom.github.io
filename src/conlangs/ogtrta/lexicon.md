<style>:root {--body-width: 80em}</style>

# OGTRTA Lexicon

Now that we have covered syntax, let's move on to the other half of OGTRTA: the lexicon.

For this section, we will have to introduce some glossing conventions:

- A dash separates bound morphemes, e.g. `cabbage-PL` "cabbages"
- A dot separates the constituent meanings of a fusional morpheme, e.g. `3.AN.PL` for the third person animate plural pronoun.
- Underscores separate multiple words used to gloss a single morpheme, e.g. `what_kind_of`
- The valence of a verb is indicated by a slash followed by a number, as in Erlang, e.g. `swim/0`, `eat/1`, `give/2`.
- Abbreviations are in uppercase, e.g. `DEF` for the definite article, `PL` for plural, etc.

Gloss abbreviations are drawn from Wikipedia's [list of glossing abbreviations](https://en.wikipedia.org/wiki/List_of_glossing_abbreviations).

## Null morphemes

Any OGTRTA language may opt out of any morpheme or inflection, by realizing it as a [null morpheme](https://en.wikipedia.org/wiki/Null_morpheme). For example, let's say you wanted your language to have a Celtic-style "genitive of juxtaposition," where to refer to a noun and its possessor you just put the two nouns next to each other. At first, it might seem like OGTRTA can't do this, because nouns cannot directly modify other nouns; only verbs can.

But there is a workaround: use a genitive verb `GEN/1` which is realized as null. So:

  **trymped y brenin**<br>
  `trymped ∅     y   brenin`<br>
  `trumpet GEN/1 DEF king`<br>
  _the king's trumpet_

Another trick lets you use genitive-case nouns as modifiers, as in German:

  **die Räder des Busses**<br>
  `die        räder    ∅     des          busses`<br>
  `DEF.NEU.PL wheel-PL GEN/1 DEF.MASC.GEN bus-GEN`<br>
  _the wheels of the bus_

Here we suppose there is a verb `GEN/1` which governs the genitive case (a constraint that can be expressed via tags) and is realized as null.

When you think OGTRTA can't do something, often it can — you just have to add some null morphemes until the syntax tree is happy. But beware: the more null morphemes you add, the more ambiguous the language (generally) gets.

## Determiners

- Do articles agree in number, case, or gender with their noun?
- Does the language have definite and indefinite articles?
- Are demonstratives (_this_, _that_) determiners, or verbs?
- Are possessives (_my_, _your_) determiners, or verbs?
- Are the quantifiers _any_, _all_, _no_ determiners, or are they expressed periphrastically as nouns, e.g. _all of the stars_, _none of the stars_?
- Do the interrogative determiners _which_, _whose_ exist, or are they expressed periphrastically?

## Articles

- `DEF` singular definite article
- `DEFPL` plural definite article

For indefinite nouns, number is expressed periphrastically, with modifiers.

This difference in number marking strategies stems from an observation about
how number is used in practice. In many indefinite noun phrases, the noun is
effectively numberless:

- "Are there **sheep** on the hill?"
- "Everyone should send their **children** to school."

These examples are morphologically plural (in English) but the actual
referents of the highlighted nouns might be singular or plural depending
on the circumstances of the utterance.

However, a definite noun cannot be numberless, because a definite noun
always refers to a specific set of things.

### Quantifiers

- `NEGDET` negative quantifier ("there are **no sheep** on the hill")
- `every` universal quantifier ("**every sheep** is on the hill")

### Interrogatives

- `which`
- `what_kind_of`
- `how_much` (also used for "how many")

### Words that aren't determiners

Some types of words are determiners in English but need not be in OGTRTA. These include:

- possessive pronouns ("my", "your")
- demonstratives ("this (one)", "that (one)")

Depending on the individual language, these concepts can all expressed by **verbs**.

### Semantics

OGTRTA employs determiners only in cases where the referent of a noun cannot be pinned down by [determining modifiers](#TODO). A phrase like "the bear" cannot be paraphrased by describing a _kind_ of bear — the same goes for "no bear" and "every bear".

Possessives and demonstratives, on the other hand, _can_ be expressed as modifiers. Precedents exist in many natural languages: English ("for the sake **of them**"), Italian ("_la **mia** famiglia_"), and Welsh ("_y bore **'ma**_"), for instance. Note that in each of these cases, the modifier can coexist with the definite article.

### "every" / "all" / "none" as modifiers

Since determiners cannot be used with pronouns, a periphrastic construction is needed to express e.g. "all of them" and "none of them."

- `1SG DIST see1 every being of1#M 3ANPL` "I saw all of them" (lit: I saw every one of them)
- `1SG DIST see1 NEGDET being of1#M 3ANPL` "I saw none of them"

## Prepositions

Derived from Wikipedia's [List of Grammatical Cases](https://en.wikipedia.org/wiki/List_of_grammatical_cases).

<details>

A language should have some way of expressing all of these ideas. Each preposition could probably have its own chapter in a grammar textbook.

- `at1` or `LOC1` "at" (the basic locative preposition) - "on/upon" can be merged with this.
- `of1` or `GEN1` "of" (genitive)
- `to1` or `ALL1` "to" (the basic allative preposition)
- `from1` or `ABL1` "from" (the basic ablative preposition)
- `in1` or `INESS1` "in" (the basic inessive preposition)
- `COM1` "with" (comitative)
- `INS1` "with" (instrumental)
- `AGT1` "by" (agentive) - can be merged with "with"
- `LIM1` "by" (limitative of time, e.g. "by 5:00")
- `DAT1` "for" (dative) - can be merged with "to"
- `BEN1` "for" (benefactive)
- `during1` "during"
- `DISTR1` "per" / "for each"
- `CMPR1` "like" / "as"
- `PRIV1` "without"

### Intransitive Prepositions

- `up0` &larr; `above1#MID`
- `down0` &larr; `below1#MID`
- `away0`, `off0` &larr; `from1#MID`

### Less Common Prepositions

- `between1` "between"
- `touch1` "touching"
- "about" / "concerning" - can be merged with "touching"
- `beside1` "next to" / "beside"
- `before1` "in front of" / "before"
- `behind1` "after" / "behind"
- `beyond1` "across" / "beyond"
- `under1` "under"
- `over1` "over"
- `near1` "near"
- `ELA1` "out of" (elative)
- `PERL1` "through" / "via"
- "according to"
- "because of"
- "for want of"
- "instead of"
- `BEN1` "for the benefit of"
- `MAL1` "against" / "for the detriment of"

### Notes

Prepositions "to" and "from", and variants like "onto" and "from out of" can be replaced by inchoative and cessastive inflections of other prepositions. E.g. "to" can be `at1#INCH`. "for" (dative) can be `of1#INCH`.

</details>

## Personal Pronouns

- `1SG` `1PL`
- `2SG` `2PL`
- `3ANSG` `3ANPL` - animate 3rd person
- `3INANSG` `3INANPL` - inanimate 3rd person

## Demonstratives

- `here0`
- `there0`

## Atomic Verbs

- `say0`
- `go0`
- `know1`
- `see1`
- `like1` like (be fond of; the comparative preposition is `CMPR1`)
- `look1`
- `think1`
- `can1`
- `make1`
- `get1`
- `be1`
- `take`
- `find1`
- `ask2` - 1: askee, 2: thing requested
- `perceive2` - 1: thing perceived, 2: quality
- feel
- turn
- want
- stand
- die
- hear
- try
- open
- begin
- let `allow1`

## Derived Verbs

- `have1` &larr; `of1#PASS`
- tell &larr; `give2 <someone> know1#INF`
- `become1` &larr; `be1#INCH`
- give &larr; `of1#CAUS` or `have1#CAUS`
- last `endure0` &larr; `endure1#MID`
- seem, appear &larr; `perceive2#PASS`

## Negation

- `#NEG`

## Morphological Tenses

- `PROX` proximal tense, used for events in the present.
- `DIST` distal tense, used for the past and for hypotheticals.
- `GNO` gnomic tense, used for general statements, for timeless truths, and when the speaker does not care to mark tense.

## Periphrastic Tenses

- `PRF` perfect (&larr; `ELA1` + infinitive)
- `FUT` future (&larr; `ALL1` + infinitive)

## Aspects

- `PROG` progressive (&larr; `LOC1` + infinitive)

## Valence-Changing

- `#MID` removes all complement slots.
- `#PASS` swaps the subject and first complement slots.
- `#MIDPASS` removes the subject and promotes the first complement to subject.
- `#CAUS` demotes the subject to first complement, increasing valence by 1, and adds a new subject.

## Valence Restoration

`#MID` removes all complement slots, but sometimes you don't want that; you want to keep one of the complements of a valence-2 verb but remove the other. The way to accomplish that is via **valence restoration**.

Each verb has a lexically-determined mapping from slot indices to verbs that restore those slots when used as modifiers. E.g. here `ABL1` is used to restore slot 1 of `ask2`.

- `1SG PROX FUT ask2#MID ABL1#M 3ANSG` "I'll ask them."

To restore slot 2, you'd have to use `ALL1`:

- `1SG PROX FUT ask2#MID ALL1#M 3INANSG` "I'll ask for it."

Valence restoration is also useful when you want to swap the complements of a valence-2 verb:

- `1SG PROX FUT ask2#MID ALL1#M 3INANSG ABL1 3ANSG` "I'll ask for it from them."

Modifiers used for valence restoration never take the [adverbial particle](#adverbial-particle).

## Part-of-Speech-Changing

### Nominalization

- `#INF` - nominalizes a verb, keeping complement slots
- `#GER` - nominalizes a verb, dropping all complement slots
- `NZ` - nominalizes a sentence

`GEN1`/`of1` can be used to attach a subject to a nominalized verb:

- `1SG PROX want1 GEN1#M 2SG see1#INF 3INANSG` "I want you to see it"

When used in this way, `GEN1` never takes the [adverbial particle](#adverbial-particle).

### Questions

Interrogative sentences are NPs.

Interrogative pronouns:

- `what`
- `who`

Interrogative determiners:

- `which`
- `whose`

Interrogative particles:

- `whether`
- `how_condition` ("How are you?", "How is the course going?")
- `how_degree` (`how_degree GNO tall0 ^Barack ^Obama` "How tall is Barack Obama?" = "To what degree is Barack Obama tall?")
  - also used for `how_much`/`how_many`
- `why`

An _interrogative NP_ is either an interrogative pronoun, or a noun with an interrogative determiner.

TODO: replace interrogative determiners with predicates. Possessives and demonstratives aren't determiners, so why should `which` and `whose` be?

OGTRTA languages may front interrogative NPs, though some languages leave them in place. When an interrogative NP is fronted, a [resumptive pronoun](https://en.wikipedia.org/wiki/Resumptive_pronoun) `RES` is left in its place. Languages may realize the `RES` morpheme as [null](https://en.wikipedia.org/wiki/Null_morpheme).

- `whose vassal 3ANSG FIN PERF kill1#INF RES` "Whose vassal did he kill?"

## Agents in non-finite clauses

The semantic agents of a non-finite clause can be added as the complement of a modifier on the main predicate. This modifier is glossed `NFSBJ` (non-finite subject) but is typically realized as some other morpheme: either `of1` (in languages that [mark first modifiers](#first-modifier-marking)) or `ADV` (in languages with an [adverbial predicate](#adverbial-predicate)).

- `3ANSG PROX bring1 3INANSG` "He brings it." &rarr; `1SG PROX want1 NFSBJ 3ANSG bring1#INF 3INANSG` "I want him to bring it."

## Modifiers on predicates

Modifier phrases can attach to predicates as well as nouns. In complex sentences, this can create undesirable ambiguity. OGTRTA languages use a couple different strategies to resolve the ambiguity.

### Nearest modifier marking

In languages that use the "nearest modifier" strategy, a modifier that immediately follows the head of its parent phrase is marked with an inflection `#M`. Often, this marking is an initial consonant mutation, but it does not have to be.

- `1SG DIST eat0 quick0#M` "I ate quickly"
- `bear fierce0#M very0#M` "a very fierce bear" — contrast with `bear fierce0#M very0`, which might mean "an actual, fierce bear."

In SOV/OVS languages, a modifier that immediately _precedes_ the head of its parent phrase gets the `#M` inflection.

- `1SG quick0#M eat0 DIST` "I ate quickly"

### Adverbial particle

In languages that use the "adverbial particle" strategy, a verb that modifies another optionally has the particle `ADV` placed before it.

- `1SG DIST eat0 ADV quick0` "I ate quickly"
- `bear fierce0 ADV very0` "a very fierce bear"

`ADV` might also precede a noun in some cases:

- `1SG DIST see1 3SG ADV thursday` "I saw it on Thursday"

## Conjunction modifiers (adconjunctions)

TODO

## Relative Clauses

Often, a simple verb is used where in English would use a relative clause. But only relative clauses can have tense markers.

A relative clause is formed by subordinating a question to the verb `REL`:

- `DEF bear REL what PROG#DIST chase1#INF 2SG` "the bear that was chasing you"

The question can contain a resumptive pronoun:

- `DEF bear REL what PROG#DIST 2SG chase1#INF RES` "The bear you were chasing"

`REL` is often realized as some other verb, like `GEN1`.
