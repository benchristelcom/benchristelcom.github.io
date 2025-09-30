# Syntax

## Core concepts

### Reversibility

The syntax described below is that of a head-initial, VOS language. However, OGTRTA is a reversible syntax. The right-hand-side of each [expansion rule](#ogtrta-syntax-rules) can be reversed to create a head-final, SOV language (far more typical of human languages). Additionally, [various extensions](extensions.html#subject-motion-svoovs-word-order) to the basic syntax can create the other four word orders (SVO, OVS, VSO, and OSV).

### Extensibility

OGTRTA is designed with extensibility in mind. Indeed, to get a naturalistic result, one practically _has_ to extend the basic syntax. The extensions that have been worked out so far are described on the [extensions](./extensions.md) page.

### No view to semantics

The basic syntax of OGTRTA is designed with no view to semantics. The syntax defines _only_ the structural relationships that can exist among words and phrases; it has no opinion about what those relationships _mean_. Meaning comes from the [lexicon](./lexicon.md).

This is one of the core principles of OGTRTA, and it is what allows [extensions](extensions.html) to do things like [build relative clauses out of questions](extensions.html#relative-clauses). We don't have to ponder philosophical issues like whether relative clauses "are really" questions or anything silly like that. _The meaning in a linguistic construction is purely a matter of convention._

### Parts of speech

OGTRTA recognizes four parts of speech or _word classes_. Each class is either _open_ or _closed_. An open class of words is one in which new words can be freely coined, derived, or borrowed from other languages. A closed class is one with a fixed set of words, which expands very rarely.

- Open classes (content words)
  - Nouns
  - Verbs
- Closed classes (grammar words)
  - Conjunctions
  - Nominalizers

**Nouns** are straightforward: a noun refers to a person, place, thing, or idea. Noun nodes are written `N` in the formal syntax.

**Verbs** in OGTRTA refer to actions, states, qualities, and relations. OGTRTA does not have separate classes for adjectives and prepositions, so verbs fill the role of both. It is possible, though, to emulate separate classes of adjectives and prepositions; see the [extensions](./extensions.md) page for ideas. Verb nodes are written `V` in the formal syntax.

**Conjunctions** connect syntax nodes (phrases and sentences) as peers — i.e. without subordinating one node to the other. English conjunctions include such useful words as "and", "or", "while", "because", "so", and so on. Conjunction nodes are written `CONJ` in the formal syntax.

**Nominalizers** turn an entire sentence into a noun phrase, allowing it to be embedded in another sentence. Nominalizer nodes are written `NOM` in the formal syntax.

### Valence

Every noun and verb has a **valence**, a number which determines how many _complements_ must follow it in the syntax tree. The complements of a word are always noun phrases, and are similar to _objects_ (e.g. the _direct object_ and _indirect object_ of a verb) in traditional grammar. Knowing the valence of each word enables listeners to parse OGTRTA sentences. In the formal syntax, a word of valence `n` is denoted `N/n` (for nouns) and `V/n` (for verbs).

When viewed in relation to its complements, a noun or verb is called a _complend_.

Valence is comparable to the concept of _transitivity_ from traditional grammar. A transitive verb is one that takes an object, like "poke" or "throw"; an intransitive verb like "swim" or "jump" takes no object. In OGTRTA, a "transitive verb" in OGTRTA would have valence 1 (`V/1`), while an intransitive verb would have valence 0 (`V/0`).

Note that _valence is a grammatical concept, not a logical one_. In English, a verb like "eat" can be used transitively or intransitively: you can say "I eat" or "I eat beans" and both are grammatical sentences. In OGTRTA, every word _must_ have a well-defined valence when it is actually used; ambiguity on this point is not allowed. However, OGTRTA languages often have [morphological affixes to modify the valence](./extensions.md#valence-changing) of a word, so your language can have both `eat/1` and `eat/0` by deriving one from the other. The valence-changing affixes can also be realized as [null morphemes](./extensions.md#null-morphemes), so `eat/1` and `eat/0` can be homophones if that's what you want.

In theory, there is no upper limit to the valence of a word. In practice, though, I have not found use for valences higher than 2.

## Metasyntax

The following notation is used in the formal description of OGTRTA syntax. Operators are listed in order from lowest to highest precedence.

```cpp
//      // Two slashes begin a comment.
A -> B; // an A consists of B
A | B   // either A or B
A B     // A and B in sequence
A*      // zero or more As
A?      // an optional A
A{n}    // exactly n As
A/n     // an A with valence n.
```

## OGTRTA syntax rules

```cpp
S  -> NP             // A sentence is a noun phrase
    | VP NP          // ...or a verb phrase followed by a subject.
    | S CONJ S;      // ...or a pair of conjoined sentences.
NP -> N/n VP* NP{n}  // A noun phrase is an n-valence noun, its modifiers, and n complements
    | NOM S          // ...or a nominalized sentence
    | NP CONJ NP;    // ...or a pair of conjoined noun phrases.
VP -> V/n VP* NP{n}  // A verb phrase is an n-valence verb, its modifiers, and n complements
    | VP CONJ VP;    // ...or a pair of conjoined verb phrases.
```

<nav>

## OGTRTA Table of Contents

{{toc /conlangs/ogtrta/v0.4}}

</nav>
