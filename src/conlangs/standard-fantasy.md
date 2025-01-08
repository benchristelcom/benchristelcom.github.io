# Standard Fantasy Phonology

This document contains preliminary work for the design of a conlang word generator based on statistical models of natural and artificial languages. One of my ideas for this proposed word generator is that users should be able to hybridize several natural languages to get a conlang that is in some sense the average of all of them.

A problem that arises in implementing this idea is that languages do not have compatible phonologies, so e.g. a Markov model of French could not simply be added to a model of Hawaiian and be expected to produce coherent results. At best, the output words would be chimerical, with abrupt transition points from one model to the other. This is because French has many phonemes that Hawaiian lacks (e.g. /s/), and Hawaiian has at least one phoneme (/h/) that French lacks. So as soon as the generator outputs /h/, the only valid transitions out of that state will be drawn from the Hawaiian model. Phonotactics also present a problem, because French allows many consonant clusters while Hawaiian allows none. In general, the more different the source languages are, the more a hybrid model will converge to a system that simply picks a random language for each generated word.

A possible solution to this problem is to create a generic phonology to which the specific phonologies of all languages can be adapted. The generic phonology would be used in the conditions of the Markov model transitions.

Example: if our order-2 French/Hawaiian hybrid generator has so far output /kos/, the state would match Hawaiian rules like `/ok/ -> /a/`, because /s/ would be considered equivalent to /k/ when matching Hawaiian rules.

A possible algorithm and datastructure for implementing this:

- The markov model would have to keep track of the source language for every transition rule.
- Then, when generating the next phoneme in a word...
  - The current state would first be converted to the standard phonology. So, for example, /ɕɜ/ might be converted to /ʃə/.
    
    NOTE: it remains to be seen whether this conversion should happen before the state is updated. Is there any value in preserving the original phonemes? The resulting phonology isn't likely to be coherent.
  - Then, the standard form would be adapted to each source language according to language-specific rules. E.g.:
    - Spanish: /ʃə/ -> /so/
    - English: /ʃə/ -> /ʃə/
    - Mandarin: /ʃə/ -> /ʂɤ/
    - Hawaiian: /ʃə/ -> /ka/

    The conversion result is termed the _language-specific current state_.

  - Then, all transition rules matching the current state would be looked up. A transition rule matches if the language-specific current state for that rule's language equals the rule's condition.
  - A matching transition rule would then be picked at random based on the frequency table, and used to generate the next state of the markov process.

Keeping track of the language for each rule also allows the languages to be weighted, e.g. to create a language that is 80% Spanish and 20% Welsh. It also allows the hybridized model to compensate for corpus size; a language shouldn't get more weight just because its model was trained on more words.

## Solving the phonotactics problem

The adaptation strategy described above leaves the problem of phonotactics. A state like /dr/ isn't going to match any Hawaiian rules if /d/ and /r/ are adapted separately.

The solution is to analyze language as sequences of segments rather than sequences of phonemes. A segment is a run of either consonants or vowels. A segment can span multiple syllables. The order of the markov model is the number of trailing segments considered when looking up rules.

When adapting the state to the standard phonology, only the _last_ phoneme of each segment is considered. Thus, a two-segment state like /draʊ/ would be converted to /rʊ/ in the standard phonology for the purposes of rule-matching. However, the output of each rule would be a complete segment.

TODO: it might be worth preserving some trace of the elided consonants in the state, by converting a state like /draʊ/ to something like `".r.ʊ"`. This might prevent the generated words from having too many consecutive clusters or diphthongs.

## Allophones

Consider the case of a language with a 3-vowel system: /a i u/. If these vowels are used as-is for looking up rules, the language's rules will match less frequently than they should, because a state that contains a vowel other than these three will not match any of the rules.

We'd like a rule like `/ba/ -> /k/` from a 3-vowel language to match states like /bɔ/ and /bɛ/ as well. This requires that when training the model, we count each occurrence of /bak/ as one-third of an occurrence of /bak/, one-third /bɔk/, and one-third /bɛk/. That is, the allophones are given equal weights that sum to 1.

NOTE: possibly, the allophones should not always be given equal weight, but that seems like it might be an unnecessary complication.

The overall goal is to map each language's phonology to cover the entire standard phonology.

## Non-neutrality

The idea of a "standard phonology" obviously can't be culturally neutral, nor should it be. If a fictional language is to be consumed by English speakers, it should be reasonably pronounceable by English speakers. Since I'm an English speaker, my standard phonology is going to be biased toward English, but that doesn't mean other people can't create standard phonologies of their own, targeting audiences who speak different languages. Perhaps "standard phonology" is the wrong term, and I should call it an "intermediate phonology" instead.

## The phonology

### Consonants

|             | Labial | Apical  | Laminal | Dorsal | Glottal |
| ----------- | ------ | ------- | ------- | ------ | ------- |
| Nasal       | m      | n       |         | ŋ      |
| Stop        | p b    | t d     |         | k g    | ʔ
| Fricative   | f v    | θ ð s z | ʃ ʒ     | x ɣ    | h
| Approximant | w      | l       | j       |        |
| Rhotic      |        | r       |         |        |

### Vowels

|         | Front | Central | Back |
| ------- | ----- | ------- | ---- |
| High    | i ɪ y |         | ʊ u  |
| Mid     | e     | ə       | o    |
| Low-Mid | ɛ     |         | ɔ    |
| Low     | a æ   |         | ɑ    |

/y/ would be used for all rounded front vowels, since IME English speakers have a hard time distinguishing between these.

### Length

Long vowels and geminate consonants may be represented by doubling the letter. They are
treated like diphthongs/clusters when looking up rules.

### Clusters

Affricates, diphthongs, and labialized and palatalized consonants, are considered sequences of phonemes rather than single phonemes.

## Unsolved problems

Adding a new source language to the word generator seems like a frightening amount of work. Where can I get a corpus of Russian text _in IPA_? The first step of adding a new language would probably be to write a transcriber program to convert the orthography to IPA. God help me if I try to do this for Irish.
