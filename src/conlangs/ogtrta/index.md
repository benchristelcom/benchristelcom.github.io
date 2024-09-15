<style>:root {--body-width: 80em}</style>

# The One Grammar to Rule Them All (OGTRTA)

Current version: 0.3 (beta)

A specification for a class of languages.

## Introduction

OGTRTA is a template for making constructed languages. The idea is that with a short wordlist and a few decisions about grammar, you can create a fully-functioning, self-consistent, complete, and _unique_ conlang, suitable for further elaboration.

I created OGTRTA for my own use, because I suck at finishing conlang grammars. I wanted a way to create a conlang that was "complete" (if short on vocabulary) in a few minutes, so that most of the remaining work would be crafting the lexicon and tweaking the morphology. Essentially, I wanted the {{link terms/walking-skeleton "walking skeleton"}} pattern, but for conlangs instead of computer programs.

However, in order to arrive at a system that would work, the way I had to develop OGTRTA was to create several actual (half-finished) conlangs, peruse grammars of natural languages, and then figure out what framework could produce them all. OGTRTA is not some pie-in-the-sky idea I dreamed up. It's derived from observations of actual languages both natural and artificial.

In creating OGTRTA, I had to strike a balance between a maximally-comprehensible system and a maximally-flexible one. As a result,
OGTRTA is not right for every language. For example, if you want a language with very free word order, tons of noun classes, and head-marking, OGTRTA is probably not a good choice — but then again, you don't _need_ OGTRTA for a language like that, because the main problem OGTRTA solves is syntax. On the other hand, if you want a language with fairly fixed word order, which is either consistently head-initial or consistently head-final, OGTRTA might work well for you.

OGTRTA comprises two parts: a syntax, and a skeletal lexicon with about 100 morphemes. This document describes both parts, beginning with the syntax.

{{toc /conlangs/ogtrta}}

<!--

Esperanto grammar
-------------------------------------------
Correlatives                 DONE

Sections of the Verdurian reference grammar
-------------------------------------------
Phonology                    out of scope
Consonants                   out of scope
Vowels                       out of scope
Phonotactics                 out of scope
Syllabification              out of scope
Stress                       out of scope
The Alphabet                 out of scope
Diacritics                   out of scope
Capitalization rules         out of scope
Punctuation                  out of scope
Morphology                   -
Verbal morphology            -
Infinitive                   DONE
Person/number endings        DONE
Tensed forms                 DONE
Full examples                -
Irregularities               out of scope
Present tense                DONE
Past and past anterior tense DONE
Future tense                 DONE
Conditional                  DONE
Imperative                   DONE
The classical imperative     DONE
Participles                  DONE
Nominal morphology           -
Cases                        out of scope
Masculine declension         -
Feminine declensions         -
Poetic accusative            -
Final stress                 -
Irregularities               -
Adjectives                   DONE
Articles                     DONE
Personal pronouns            DONE
Relative and interrogative pronouns DONE
Derivational morphology      -
Nominalizations              DONE
Adjectivizations             DONE
Verbalizations               DONE
Compounds                    out of scope
Preposition + verb           -
Two-word compounds           -
Sound patterns               -
Gender adjustment            -
Diminutives and augmentatives -
Parts of speech: User manual -
The verbal system            -
Time                         -
Aspect                       -
Dénuo (habitual)             DONE
Siča (progressive)           DONE
Núnece (closeness to present) DONE
Ya, yatá (completive)        DONE
Za (inceptive)               DONE
The conditional              TODO
Infinitive                   DONE
Participles                  DONE
Past and present             DONE
One who does                 DONE
Gerund                       DONE
Reflexives                   DONE
Valence                      DONE
Reducing valence             DONE
Increasing valence           DONE
Pitfalls                     -
Ditransitives                -
All about nouns              -
Nominative                   -
Accusative                   -
Dative                       -
The dative of relation       -
Genitive                     DONE
Partitive                    -
With locations               -
NP order                     -
Nouns on nouns               -
Gender mismatches            -
Anaphora                     TODO
Personal pronouns            DONE
Subject position             -
Predicates                   -
Object position              -
Pronominal gender            -
Reflexives                   DONE
Each other                   DONE
Impersonal tu                -
The formal you               -
Indefinite pronouns          -
Determiners                  -
Articles                     DONE
Demonstrative prefixes       -
Interrogative kî             DONE
Quantifiers                  DONE
Adjectival anaphora          TODO
Verbal anaphora              TODO
Kies ‘do what’               TODO
Fassec ‘do that’             TODO
Ozë                          TODO
Prepositions                 DONE
Case usage                   -
Prepositional prefixes       -
Numbers                      -
Morphology                   -
Cardinals                    TODO
Mathematical symbols         -
Constructions                -
Sentence order               DONE
Re-ordering                  TODO
Negation                     TODO
Other negative words         TODO
Questions                    -
Yes/no questions             DONE
Interrogative questions      DONE
Adverbials                   TODO
Transformations              TODO
Sentential arguments         DONE
Sentential objects           DONE
Sentential subjects          TODO
Serial verbs and Equi NP deletion -
Whether                      DONE
Nominalization               TODO
Other forms of subordination TODO
Relative clauses             DONE
Subordination using ke       TODO
Other subordinators          TODO
Headless relatives           TODO
Indefinite referents         TODO
Nonrestrictive clauses       TODO
Conditions                   TODO
The use of esli ‘if’         TODO
Implied ‘if’                 TODO
Comparatives                 TODO
Superlatives                 TODO
Fun with esan                TODO
Esan inversion               TODO
Existentials                 TODO
Clefting                     TODO
Other transformations        TODO
Constituent dislocation      TODO
Deletions                    TODO
Sluicing                     TODO
Gapping                      TODO
Stripping                    TODO
Negative raising             TODO
Pronoun hopping              TODO
Že-clefting and raising      TODO
Semantic fields              -
Polite expressions           out of scope
Greetings                    out of scope
Other polite expressions     out of scope
Kinship terms                out of scope
Direct descent               out of scope
Prefixes                     out of scope
Notes                        out of scope
Time                         out of scope
Telling time                 out of scope
Days of the week             out of scope
The year                     out of scope
Other time expressions       out of scope
Weather                      out of scope
Pragmatic particles          TODO
Dialects                     out of scope
Samples                      -
-->
