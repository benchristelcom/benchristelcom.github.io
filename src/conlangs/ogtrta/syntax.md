<style>:root {--body-width: 80em}</style>

# Syntax

## Overview

### Parts of speech

OGTRTA recognizes six parts of speech:

- nouns
- verbs
- determiners
- pronouns
- conjunctions
- particles

**Nouns** are straightforward: a noun refers to a person, place, thing, or idea. However, **verbs** in OGTRTA are a little bit different from English verbs. OGTRTA has no adjectives or prepositions, so verbs fill the role of both.

OGTRTA's **determiners** include words like articles (e.g. "the") and some interrogatives ("which", "whose").

**Pronouns** function syntactically much like nouns, but have some restrictions. For example, they cannot take determiners. Also, their inflectional morphology may differ from that of ordinary nouns (exactly _how_ it differs is left up to the individual language).

**Conjunctions** connect syntax nodes (phrases and sentences) as peers — i.e. without subordinating one node to the other. Conjunctions include such useful words as "and", "or", "while", "because", "so", and so on.

**Particles** nominalize an entire sentence in various ways.

Of these parts of speech, nouns and verbs are "open classes," meaning that speakers of a language innovate and borrow new ones all the time. Determiners, pronouns, conjunctions, and particles are "closed classes." Innovation in these parts of speech should happen very rarely.

OGTRTA aims to provide languages with a complete set of determiners, pronouns, conjunctions, and particles at the outset, so the only part of the lexicon you will need to design yourself is the nouns and verbs. OGTRTA also provides a framework for designing preposition-like verbs.

### Word order

The basic word order in declarative sentences in OGTRTA is head-initial **VO** or verb-object. "Head-initial" means a word's modifiers typically follow it, and **VO** means the verb and its objects are always adjacent, with the verb first. The subject of a sentence can be placed before or after the verb phrase, yielding **SVO** and **VOS** word orders.

Additionally, OGTRTA is a reversible syntax: individual languages can reverse the right-hand side of all the syntax production rules, producing a head-final **OV** language.

**VSO** and **OSV** word orders are not directly supported. If you really want to make a VSO language with OGTRTA, you can probably figure something out, but this guide will not describe how to do it.

To keep things straightforward, this guide assumes a verb-object word order, and all the examples will use that syntax.

## Syntax Summary

```
S  -> DS                       // A sentence may be a declarative sentence
S  -> NP                       // ...or it may be a noun phrase.
DS -> VP NP                    // A declarative sentence has a finite verb phrase and a subject
DS -> NP VP                    // ...and their order may be reversed.
DS -> S CONJ S                 // Declarative sentences can be conjoined.
VP -> V_n VP* NP{n} VP*        // A verb phrase has an n-valent verb, optional modifier VPs,
                               // n complement noun phrases, and finally some more optional VPs.
VP -> VP CONJ VP               // Verb phrases may be conjoined.
NP -> PRN                      // A noun phrase may be a pronoun
NP -> DET? V_0* N_n VP* NP{n}  // ...or it may have an optional determiner, zero or more 0-valent
                               // verb modifiers, an n-valent noun, zero or more modifier VPs,
                               // and n complement noun phrases.
NP -> NP CONJ NP               // Noun phrases may be conjoined.
NP -> IP DS                    // A noun phrase may consist of an interrogative phrase followed
                               // by a declarative sentence.
IP -> ID? V_0* N_n VP* NP{n}   // An interrogative phrase may be an NP with an interrogative
                               // determiner.
IP -> IPRN                     // ...or it may be an interrogative pronoun.
```

## Examples

As stated above, noun phrases in VO OGTRTA are head-initial; modifiers follow the noun.

- **anar carnë**<br>
  `sun red`<br>
  _a red sun_

Multiple modifiers may be chained together:

- **anar carnë púrëa**<br>
  `sun red bleared`<br>
  _a bleared red sun_

Determiners precede the noun:

- **i ohtar**<br>
  `the warrior`<br>
  _the warrior_

Modifiers may intercede between the determiner and the noun:

- **i maitë ohtar**<br>
  `the skilled warrior`<br>
  _the skilled warrior_

Modifiers may have complements (objects). Here the word **mi** "in" requires one complement:

- **anar mi rómen**<br>
  `sun in east`<br>
  _the sun in (the) east_

- **i ohtar colë macil**<br>
  `the warrior carrying sword`<br>
  _the warrior (who is) carrying a sword_

Complements are noun phrases, so they can have modifiers of their own:

- **i ohtar colë anar mi rómen**<br>
  `the warrior carrying sun in east`<br>
  _the warrior (who is) carrying (the) sun in (the) east_

An adjective-like verb can be the predicate of a sentence without any need for a copula like "to be". Depending on the language, the predicate may be marked as finite (`FIN`).

- **maitëa i ohtar**<br>
  `skilled-FIN the warrior`<br>
  _the warrior is skilled_

The subject can come before the predicate:

- **i ohtar maitëa**<br>
  `the warrior skilled-FIN`<br>
  _the warrior is skilled_

Preposition-like verbs don't require a copula either.

- **mia rómen i anar**<br>
  `in-FIN east the sun`<br>
  _the sun is in the east_

- **i anar mia rómen**<br>
  `the sun in-FIN east`<br>
  _the sun is in the east_

However, in order to say that one noun is another, a copula is required:

- **i nér ná ohtar**<br>
  `the man be-FIN warrior`<br>
  _the man is a warrior_

The copula can be used to form appositives:

- **Aragorn ne aran**<br>
  `Aragorn be king`<br>
  _Aragorn (who is) king_

Then there are verbs that we think of as verbs in English:

- **i ohtar colëa macil**<br>
  `the warrior carry-FIN sword`<br>
  _the warrior carries a sword_

- **i ohtar thurëa alda fána**<br>
  `the warrior seek-FIN tree white`<br>
  _the warrior seeks a white tree_

Verbs can have adverb-like modifiers:

- **i ohtar colëa maitë macil**<br>
  `the warrior carry-FIN skillful sword**<br>
  _the warrior skillfully carries a sword_

Adverbs can also be placed at the beginning of the sentence:

- **maitë i ohtar colëa macil**<br>
  `skillful the warrior carry-FIN sword`<br>
  _skillfully the warrior carries a sword_

Some languages mark adverbs, allowing somewhat freer syntax:

- **i ohtar colëa macil omaitë**
  `the warrior carry-FIN sword ADV-skillful`
  _the warrior carries a sword skillfully_

Verbs can be nominalized, forming an _infinitive_. The imperative form of a verb is the same as the infinitive form:

- **Thurië i alda fána**<br>
  `seek-INF the tree white`<br>
  _seek the white tree_

Nominalized verbs can be the complements of other verbs:

- **Ni merëa thurië i alda fána**<br>
  `I want-FIN seek-INF the tree white`<br>
  _I want to seek the white tree_

...and they can be the complements of preposition-like words. Aspectual distinctions can be made this way:

- **Ni mia thurië i alda fána**<br>
  `I in-FIN seek-INF the tree white`<br>
  _I am (in the act of) seeking the white tree_

Questions are syntactically noun phrases:

- **Ma elyë cenëa i alda?**<br>
  `whether you see-FIN the tree`<br>
  _Do you see the tree?_

- **Man ná i nér tana?**<br>
  `who be-FIN the man that`<br>
  _Who is that man?_

As such, they can be the complements of verbs:

- **Ni ala istëa ma ni cenëa i alda.**<br>
  `I not know-FIN whether I see-FIN the tree`<br>
  _I do not know if I see the tree._

- **Ni merëa nyarië le man ná i nér tana.**<br>
  `I will-FIN tell-INF you who be-FIN the man that`<br>
  _I will tell you who that man is._ 

A whole sentence can be nominalized:

- **Elyë nyarenë im is cenenë i ohtar**<br>
  `You tell-PST NZ he see-PST the warrior`<br>
  _You said (that) he saw the warrior._

When a question word is fronted, a resumptive pronoun can be left in its place:

- **Man elyë nyarenë im is cenenë ce?**<br>
  `Who you tell-PST NZ he see-PST RES`<br>
  _Who did you say he saw?_

## Formal Syntax

### Production rules, level 1

The complete set of production rules for OGTRTA is complex, so rather than dump them on you all at once, they will be introduced in stages. This section describes "level 1" syntax—the most minimal, stripped-down version of the grammar.

#### Sentences

A sentence is either **declarative** (making a statement about _what is the case_), **imperative** (issuing a command or request) or **interrogative** (asking a question). OGTRTA views interrogative sentences as a special case of imperatives, since they're making a request for information. So there are only two types of sentences in the formal grammar: declarative sentences, abbreviated `DS` and interrogative/imperative sentences, abbreviated `IS`.

Here is how we represent the idea that a sentence `S` is either a `DS` or an `IS`:

```
S -> DS
S -> IS
```

A declarative **sentence** `DS` consists of a **verb phrase** `VP` followed by a subject **noun phrase** `NP`.

```
DS -> VP NP
```

The subject can also be fronted:

```
DS -> NP VP
```

A sentence can be composed of multiple sentences, using a conjunction:

```
DS -> DS CONJ DS
```

An interrogative or imperative sentence `IS` is a single noun phrase (see the sections on [imperatives](#imperatives) and [interrogatives](#interrogatives) for how this works).

```
IS -> NP
```

#### Verb Phrases

A **verb phrase** consists of a **verb** `V` with valence `n` (represented `V/n`), followed by n **complement noun phrases** (represented `NP{n}`).

```
VP -> V/n NP{n}
```

What's **valence**, you ask? The valence of a word is the number of noun phrases you need to put after the word to make it a complete "thought." For example, "Rachel skydives" is a complete thought, because "skydives" has a valence of 0, but "Rachel pokes" is not complete — "pokes" has valence 1 and requires an object. The noun phrases required by the valence of a word are called the word's _complements_.

All words in OGTRTA have a valence. Most nouns have a valence of 0, but nouns derived from verbs (_infinitives_) often have a valence greater than 0. Individual languages might also choose to give other nouns a nonzero valence, e.g. kinship terms. A word like "daughter" might require a complement specifying who the referent is the daughter of.

Note that _valence is a grammatical concept, not a logical one_. In English, a verb like "eat" can have either valence 1 or valence 0, and that's perfectly fine. You can say "I eat", or "I eat beans" and both are grammatical. In OGTRTA, every word _must_ have a well-defined valence when it is actually used: there is no such thing as an optional complement. However, OGTRTA languages often have [morphological affixes to modify the valence](#valence-changing) of a word, so your language can have both `eat/1` and `eat/0`. The valence-changing affixes can also be realized as [null morphemes](#null-morphemes), so `eat/1` and `eat/0` need not have distinct forms.

In any case, the important thing to understand is that valence is always about what _words_ are required to be there, not about whether the action represented by a verb conceptually has a direct object or not.

#### Noun Phrases

A **noun phrase** consists of a noun `N` with valence `n`, followed by its `n` complements. The noun is optionally preceded by a determiner.

```
NP -> DET? N/n NP{n}
```

A noun phrase can also be composed of other noun phrases, using a conjunction:

```
NP -> NP CONJ NP
```

Or it can just be a pronoun:

```
NP -> PRN
```

The noun phrase at the root of an interrogative or imperative sentence often takes the form of an **interrogative phrase** followed by a declarative sentence:

```
NP -> IP DS
```

An **interrogative phrase** is either an interrogative pronoun `IPRN`, or a noun phrase with an interrogative determiner `IDET`.

```
IP -> IPRN
IP -> IDET N/n NP{n}
```

With just these syntax rules, we can already construct sentences of arbitrary length and complexity. Something's missing, though. Where are the adjectives?

### Production rules, level 2

Recall that OGTRTA does not have adjectives as a separate lexical class. However, its syntax does have a concept of **modifiers**. A verb phrase can modify a noun by following it (either before or after any complements):

```
NP -> DET? N/n VP NP{n} VP
```

In fact, a noun can be modified by any number of VPs (zero or more), represented by `VP*`:

```
NP -> DET? N/n VP* NP{n} VP*
```

Words that we think of as adjectives in English are zero-valence verbs in OGTRTA. 

A noun phrase that includes a determiner can have zero-valence modifiers between the determiner and the noun:

```
NP -> DET V/0* N/n VP* NP{n} VP*
```

This rule is optional, though, and individual languages can safely leave it out.

Verbs can also have modifiers, equivalent to adverbs in English.

```
VP -> V/n VP* NP{n} VP*
```

### Production rules, level 3

Now we come to the interface between syntax and morphology. The nodes in our syntax tree can have "tags," which can be "inherited" by descendent nodes. Depending on the specific language, tags on a node can influence what morphological affixes are allowed or required. In the syntax metalanguage, I'll represent these tags as a letter after a dot, like `.x`.

So, starting back at the beginning: A sentence has a **subject noun phrase** (`NP.s`) and a **finite verb phrase** (`VP.f`).

```
S -> VP.f NP.s
S -> NP.s VP.f
```

Any tags on a verb phrase are inherited by its head verb. Here I use `.x` to mean "any tags that are present." The modifiers of a phrase get a "modifier tag" `.m`, and the complements of a verb may get a "case tag" `.c`, the specific nature of which is determined by the lexical verb. The modifiers of a verb phrase also get an "adverbial tag" `.a`.

```
VP.x -> V_n.x VP.m.a* NP.c{n} VP.m.a*
```

That rule is pretty complicated, but I promise it's the worst one. A conjoined verb phrase passes its tags to both conjuncts:

```
VP.x -> VP.x CONJ VP.x
```

Same with a conjoined noun phrase:

```
NP.x -> NP.x CONJ NP.x
```

The head noun of an NP inherits the tags:

```
NP.x -> PRN.x
NP.x -> DET? N.x VP.m*
NP.x -> DET V_0.m* N.x VP.m*
```

And that's it! That's the entire syntax of OGTRTA.

All together now:

```
S -> DS
S -> NP
DS -> VP.f NP.s
DS -> NP.s VP.f
DS -> S CONJ S
VP.x -> V_n.x VP.m.a* NP.c{n} VP.m.a*
VP.x -> VP.x CONJ VP.x
NP.x -> PRN.x
NP.x -> DET? N.x VP.m*
NP.x -> DET V_0.m* N.x VP.m*
NP.x -> NP.x CONJ NP.x
NP.x -> IP DS
```

Get that printed on a t-shirt. I'm sure it'll be a hit at parties.
