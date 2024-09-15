<style>:root {--body-width: 80em}</style>

# List of OGTRTA Morphemes

## Determiners

- `DEF` singular definite article
- `DEFPL` plural definite article
- `NEGDET` negative quantifier ("none", "zero")
- `every` universal quantifier
- `which`
- `whose` (languages where possessives aren't determiners might omit this)
- `what_kind_of`
- `how_much` (also used for "how many". Optional; can be subsumed by `how_degree`)

## Nouns

- `INDF` - indefinite noun, used for counterfactual and hypothetical things: "I want a wooden snowman, but no one sells _them_." Can often be translated "any", "some", or "one(s)": "I couldn't find _any_", "Show me _some_." Not a pronoun, so it can take modifiers and articles: "I like the blue _ones_."

## Pronouns

- `1SG`
- `2SG`
- `3ANSG`
- `3INANSG`
- `1PL`
- `2PL`
- `3ANPL`
- `3INANPL`

## Particles

- `NZ` - sentence nominalizer ("that"). Can also be used for the optative mood, `OPT` (because nominal utterances are pragmatically requests or wishes).

### Interrogatives

- `how_degree`
- `how_condition`
- `whether`
- `why`

## Verbs

### Special-purpose verbs

- `REL` introduces a relative clause
- `COP` copula - equates two nouns
- `REFL` reflexive adverb
- `RECP` reciprocal adverb
- `if1` the antecedent is the first argument; the consequent is the subject. `if1` may either be the predicate of the sentence, or be an adverb modifying the consequent phrase.

Languages without reflexive or reciprocal pronouns may mark verbs as reflexive/reciprocal with the above (ad)verbs.

### Demonstratives

- `here0`
- `there0`

### Periphrastic Tenses and Aspects

- `PRF` perfect (&larr; `ELA1` + infinitive)
- `FUT` future (&larr; `ALL1` + infinitive)
- `PROG` progressive (&larr; `LOC1` + infinitive)
- `HAB` habitual aspect (&larr; `use1` + infinitive)
- `EXP` experiential aspect (&larr; `have1` + infinitive or `beyond1` + infinitive)

### Preposition-like verbs

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
- `between1` "between"
- `touch1` "touching"
- `about1` - can be merged with `touch1` or `concern1`
- `beside1` "next to" / "beside"
- `before1` "in front of" / "before"
- `behind1` "after" / "behind"
- `beyond1` "across" / "beyond"
- `under1` "under"
- `over1` "over"
- `near1` "near"
- `ELA1` "out of" (elative)
- `PERL1` "through" / "via"
- `according_to1`
- `for_want_of1`
- `instead_of1`
- `BEN1` "for the benefit of"
- `MAL1` "against" / "for the detriment of"

## Bound Morphemes

- `#NEG`

### Tense/aspect/mood affixes

- `#PROX` proximal tense, used for events in the present.
- `#DIST` distal tense, used for the past and for hypotheticals.
- `#GNO` gnomic tense, used for general statements, for timeless truths, and when the speaker does not care to mark tense.
- `#IMP` imperative - can be realized as `#INF`.

### Valence-changing affixes

- `#MID` removes all complement slots.
- `#PASS` swaps the subject and first complement slots.
- `#MIDPASS` removes the subject and promotes the first complement to subject.
- `#CAUS` demotes the subject to first complement, increasing valence by 1, and adds a new subject.

### Verb-nominalizing affixes

- `#INF` - infinitive
- `#GER` - equivalent to `#MID#INF`

### Derivational affixes

- `#VBZ` - verbalizer
- `#AUG` - augmentative
- `#DIM` - diminutive

For the many other derivational affixes you will probably need, use English words or affixes in lowercase:

- `#ful`
- `#like`
- `#able`
- `#related`
- `#worthy` e.g. _memorandum_ "something to remember"
- `#tool`
- `#thing`
- `#subject` e.g. "young" &rarr; "youth, young person"; "see" &rarr; "seer"; perhaps also "war" &rarr; "warrior". Individual languages might split this into `#AN_subject` and `#INAN_subject` for animate and inanimate
- `#object1`
- `#object2`
- `#practitioner` e.g. Latin _dens_ "tooth" &rarr; "dentist"; "music" &rarr; "musician"
- `#place` e.g. "smith" &rarr; "smithy"; "bake" &rarr; "bakery"
- `#result` e.g. "bake" &rarr; "baked goods"
- `#input` e.g. "cook" &rarr; "ingredient"
- `#aggregate` e.g. "bag" &rarr; "baggage"
- `#array` e.g. Sindarin _certh_ "rune" &rarr; _certhas_ "rune-row"
- `#container` e.g. "salt" &rarr; "saltshaker"

### Disambiguating affixes

- `#ADV` - adverb
- `#ADC` - adconjunction
- `#M` - nearest modifier

### Numbers

In their basic form, numbers are nouns used for counting and math. Cardinal numbers head their noun phrase: `take1#INF three GEN1 apple` "Take three apples." Ordinals and fractions are verbs.

- `#ORD` - ordinal (first, second, third, etc.)
- `#FRAC` - fraction (half, third, quarter, etc.)

## Math

Multiplication uses the genitive: "five of three is fifteen." Addition uses "and" or "to." Subtraction uses "from." Division is expressed by combining multiplication with fractions.

## Derived Lexemes

- `up0` &larr; `above1#MID`
- `down0` &larr; `below1#MID`
- `away0`, `off0` &larr; `from1#MID`
