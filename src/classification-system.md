# Civilizational Information Classification System

Goal: organize the information we'd need to rebuild civilization after parts of
it go missing.

A search engine made by humans, not algorithms.

## Why is the Dewey Decimal Classification not appropriate for the web?

The DDC is designed to assign every book a unique location on the shelves
relative to other books. This constraint is necessary because a book is a
physical object that can only be in one place. A web classification system, by
constrast, can easily class each website in multiple categories.

Unlike books, works on the web are fractal: you can have surface links or deep
links. Web resources are also mutable and interlinked, and might not have
clearly defined boundaries. A classification of web resources is therefore
better thought of as a classification of _links_, not a classification of
_works_.

## How should links on the web be classified?

The most important attribute of a link is perhaps the **subject** of the
document behind it. The DDC classes works primarily by subject.

Other attributes may also be relevant to the catalog-searcher, however. For
example, the **medium** of a work is often important: is it text, an image, a
video, a game, etc. The searcher may be looking for a specific **form** or
**genre** (essay, blog, documentary, manifesto, reference documentation, news
article, PR release). The **language** a work is written in is obviously a big
factor in whether any particular person can use it.

### The multidimensionality problem

In many cases, the concepts in a catalog system are not arranged in a strict
hierarchy (tree), but instead form a semilattice.

For example, consider the problem of classing a work on religious rituals in
Korean shamanism. Should the catalog have a class for works on ritual, perhaps
with sub-classes for individual religions? Or should specific religions be the
primary concept, with sub-classes for different aspects (rituals, myths, people,
beliefs, etc.) Having only one of these two organization schemes is
unsatisfactory because you might be left with no clear way to class a work on
ritual in general or Korean shamanism in general.

One solution is to have both concepts at the primary level and combine them
somehow. So:

- 42846 - Korean shamanism
- 430 - Ritual

These could be combined as: `s42846*430`. The star operator indicates set
intersection; that is, the work is specifically about ritual in Korean
shamanism, not about ritual in general and Korean shamanism in general. The
latter meaning would be represented `s42846,430`. When using either notation,
the numbers are listed in lexicographic order.

The difference between the intersectional and non-intersectional meanings might
become important when ranking the results of a catalog search. A search for
"Korean shamanism" should turn up general works on that topic before specific
ones on subtopics, so `s42846` would be ranked above `s42846*430`.

## Prefixes

The subject of a work can be narrow or broad. Subject codes are assigned
according to the specificity of the subject(s) covered by the work, so that
they do not overspecify or underspecify the subject. For example, a work on
philosophy in general would be classed `s41`, while a work on epistemology would
be classed `s411`.

A completely general work (e.g. an encyclopedia) would have no subject code at
all — or more precisely, the subject code would be the empty string.

## Numbers larger than 9

The Dewey Decimal System suffers from the problem that there are only ten digits
in our numeral system. As a result, it is forced to subdivide every concept into
no more than ten other concepts. This leads to awkwardness.

Here is one way of allowing multi-digit class numbers while preserving
lexicographic ordering and avoiding delimiters in the common case: Two-digit
subclass numbers must be preceded by `A`, which ranks after all digits in ASCII
order. Thus, after 4129 (the 9th subclass of 412) would come 412A00. The
presence of `A` ensures that this class ranks after 4129 in ASCII sort order,
since `'A' > '9'`. It of course ranks before 413. And all other two-digit
subclasses fall in line behind it: `412A01`, `412A02`, up to `412A99`.
Three-digit subclasses use `B` instead of `A`: `412B123`. They thus rank after
all two-digit subclasses. 1000 classes should be enough for anyone, but in case
they are not, there are 24 other letters of the alphabet.

## Operators and facet codes

The full metadata for a work may contain multiple facet codes. Each facet has
an alphabetic prefix: `s` for subject, `q` for language, `a` for author, `m`
for medium, `g` for genre, `d` for link depth etc.

Operators that combine codes within the same facet are drawn from the ASCII
range 0x21 to 0x2f, so that they are consistently lexicographically ranked
before digits and letters.

## Dates

The following notations are used for dates in the subject and publication date
facets:

- `2012-12-21` - Exact date
- `2012-12` - Year-month
- `2012` - Year
- `c2012` - Circa year
- `2010s` - Decade
- `21c` - Century
- `-6c` - Century BCE

Ranges are expressed using a slash `/`: `1600/1750`.

For example, a book on 15th-century French cooking published in 2004 would
have a call number like `s6A31*826*89(15c) d2004`.

## Keywords

Some concepts are too specific to have their own numeric code. Even well-known
concepts like "Mark Twain" or "The Apollo space program" will probably not be
represented by decimal codes.

In these cases, the call number can be supplemented by keywords drawn from an
authority database (e.g. https://authorities.loc.gov/)

For example, works by Mark Twain would have the author facet `a(Twain, Mark, 1835-1910)`.

## Classification by subject

1. **Originalia (fiction, letters, newspapers, things-in-themselves)**
	1. primary and first-party sources: letters, general accounts, documentation, memoranda, records, brochures, advertising
		1. Official websites (of companies, products, etc.) (note: surface links only)
			1. Websites of intergovernmental and international organizations (e.g. United Nations, NATO)
			2. Government websites
				1. National and federal government websites
				2. State and provincial government websites
				3. Local and special district websites
				4. Municipal / city websites
			3. Official websites of nonprofits, charities, and NGOs
			4. Official websites of corporations and businesses
			5. Official websites of other organizations, associations, and societies
			6. Official websites of specific products, services, and things (note: prefer to class under things-in-themselves when the website actually provides the product or service)
		2. Product documentation
		3. Personal websites and blogs (note: surface links only)
		4. Raw data (shared code with: Knowledge of the physical world)
		5. Technological specifications and notices (RFCs, CVEs, etc.) (shared code with: Knowledge of skill)
		6. Laws and contracts (shared code with: Knowledge of humanity)
			1. International law
			2. Federal and national laws
			3. License agreements
	2. things-in-themselves
		1. Online tools and apps
		2. Art
		3. Games (incl. interactive fiction)
		4. Fiction
2. **Knowledge of information (library science)**
3. Knowledge of process (computer science)
4. Knowledge of derivations (mathematics)
5. **Knowledge of all worlds (philosophy and religion)**
	1. Knowledge of knowledge (epistemology)
	2. Knowledge of existence (ontology and metaphysics)
	3. Knowledge of self (philosophy of mind, phenomenology, soteriology)
	4. Knowledge of value
		1. Aesthetics
		2. Ethics
	5. Knowledge of the future (divination and eschatology)
	6. Knowledge of gods and spirits
6. Knowledge of the physical world (science)
7. **Knowledge of skill (technology, arts, techniques, trades, and engineering)** - note: divided by historial period / tech level for ease of rebuilding civilization
	1. Stone age technologies
		1. Stoneworking
		2. Woodworking
		3. Pyrology
		4. Ceramics
		5. Fiber arts and textiles
		6. Leatherworking
		7. Production of dyes and paints
		8. Cooking
		9. Construction
		10. Agriculture
		11. Weapons and warfare
	2. Bronze age technologies
		1. Mining and metallurgy
		2. Food processing
		3. ...
	3. Iron age technologies
	4. Industrial technologies
		1. Medicine and applied biology
		2. Computers, IT, and computer programming
		3. Construction, civil engineering
		4. Mechanical engineering
		5. Chemical engineering
		6. Electrical engineering
			1. Signal processing
		7. Painting (as art)
8. Knowledge of humanity (anthropology, sociology, political science, economics, management)
	1. Religion
		1. Hinduism
		2. Buddhism
		3. Daoism
		4. Confucianism
		5. Judaism
		6. Christianity
		7. Islam
		8. Jainism
		9. Sikhism
		10. Shinto
		11. Baha'i
		12. Mormonism
		13. Paganism
			1. Greek and Roman paganism
			2. Wicca
			3. Druidism
		14. Zoroastrianism
		15. Minor and modern religions and cults
			1. Hermeticism
9. Knowledge of memory (history, memoirs, biography, geography) and tertiaria (meta-analysis, comparative studies, interdisciplinary works)
	1. History
		1. History of specific social movements
			1. Civil rights movement in the US
			2. Anti-smoking campaigns
10. Miscellaneous, generalia

## Classification by medium

1. Text
	1. Scholarly article or paper
	2. Personal blog or newsletter
	3. Journalism
2. Audio
	1. Spoken word
	2. Music
3. Images
	1. Photographic
		1. Stock photos
	2. Drawing, painting, collage, etc.
4. Video
	1. Photographic
	2. Animation
5. 3-D Digital Models
6. Interactive

## Classification by genre

1. Records, data
2. Letters
3. Memoranda
4. Short stories
5. Novels
6. Advertising, brochures, marketing websites
7. Third-party tutorials
8. Reference documentation
9. Laws
10. Online communities
11. Tools, apps, programs
12. Games

## Classification by scope

1. Deep links (specific documents and pages)
2. Surface links (entire websites)

## Classification by language

Use: https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes

## Classification by author
