# Ben's Optimal Classification System for Web Resources (BOCS)

This page describes a systematic way of organizing the links in a web directory.

Design goal: you should be able to search a catalog in this format with
Hypersearch, get reasonable results by default, and have a high degree of
control if you want it.

Every link is associated with a classifier that can indicate the following
attributes of the linked resource:

- scope: is the link intended to refer the reader to a specific _page_/URL, an entire domain, a subdomain, or a subdirectory?
- subject / topic: what is the linked resource about?
- (optional) person: author, translator, archivist
- (optional) date
- (optional) language
- (optional) form/genre/medium: blog, video, municipal website, app, RFC
- (optional) purpose: e.g. description, instruction, critique, entertainment
- (optional) provenance: is it a translation of another work? A commentary? An archive? A mirror?

Any attribute can be repeated.

Although classifiers describe the linked resource, they are assigned by the
directory maintainer, and therefore reflect the *maintainer*'s judgement what
the best classification is.

Attribute codes are separated by spaces. `0 S1 D2022`

The value of the scope attribute is a hierarchical numeric code.
- 0 - whole URL
- 1 - domain
- 2 - subdomain
- 3(dir) - directory


The person attribute gives the author's name prefixed by A0. Parentheses are
used to delimit multi-word names. E.g. `A0(Richard P. Gabriel)`. The best
practice for names is to use whatever name the author puts on their website.
`A1` is the translator of a work, `A2` is the compiler or curator, etc.

The date attribute is in the format YYYY-MM-DD, YYYY-MM, YYYY, Cc (century),
or DDD0s (decade) and is prefixed by D, e.g. `D(1990s)`. The `D` prefix may be qualified by
a numeric code indicating the event, e.g. publication, authorship, or archiving.
`D0(1510s) D1(1521) D2(1990s)?` means the work was written in the 1510s,
published in 1521, and put on the web (probably) in the 1990s.

The form attribute is a hierarchical numeric code, prefixed by F. E.g. `F0` is
a free-form HTML website, `F0.1` is a personal site, `F1` is plain text, `F1.1`
is markdown source, `F2` is a PDF, etc.

Purpose is a hierarchical numeric code prefixed by T.

Provenance is a combination of hierarchical and textual field. Examples:

- `P2+3` means the link points to an archive of a translation

The + symbol conjoins multiple attribute values.

The / symbol indicates a range of values. E.g. `D(2022)/D(2024)` means the range
of years between 2022 and 2024, inclusive. A tilde on one side of a slash
means no bound, e.g. `D(2022)/D~` would be used for a website created in 2022 and
continuously updated.

The ? symbol following an attribute indicates that the cataloger is uncertain
about the attribute value. E.g. `D(1990s)?` means that the webpage was probably
written in the 1990s.

## Catalog

### Cross-cutting numbers

- Translation
- Archiving
- Textual media and printed material
  - Newspapers, journals, magazines, other periodicals
    - News and newspapers
    - Periodical scientific journals
    - Magazines
- Technology
  - Programming and data languages
    - JavaScript
    - PHP
    - HTML
    - CSS
    - SQL
    - JSON
  - Software and services
    - 
- Visual media
  - Still images
    - Photographs
    - Drawing, painting
  - Video and animation
- Audio media
  - Spoken word
  - Music
  - Field recording
- Human organizations
  - States, governments
    - Nations
    - States, regions, provinces
    - Localities
    - Cities, towns
  - Nonprofits, charities, NGOs
  - Religious organizations, churches
  - Corporations, businesses
  - Online communities
    - Chatrooms, IRC
    - Social networks and social media
    - *nix systems
    - Forums

### Form

- F0 - websites and HTML pages
  - F0.0 - free-form websites
  - F0.1 - platforms
    - F0.1.0 - general web hosting
    - F0.1.1 - forums
    - F0.1.2 - wikis
    - F0.1.3 - blogging platforms
    - F0.1.4 - social networks
  - F0.2 - blogs and newsletters
  - F0.9 - web tools and apps
- F1 - plain text
  - F1.0 - unstructured text
  - F1.1 - CSV and tabular data
  - F1.2 - Markdown
- F2 - images
- F3 - audio
- F4 - video
  - F4.1 - animation
  - F4.2 - photographic video
    - F4.2.1 - screencasts
      - F4.2.1.1 - let's plays, gaming streams
  - F4.3 - streaming video
- F5 - PDF and similar
- F6 - source code


### Governance

Who controls this website?

- G1 - government websites
  - G1.1 - federal / national government
    - G1.1(United States)
  - G1.2 - state / province / regional government
    - G1.2(California)
    - G1.2.1 - national government associated with state government website
      - e.g. `G1.2.1(United States) G1.2(California)`
  - G1.3 - local government
- G2 - academic institutions
  - G2.1 - universities
  - G2.2 - public schools
- G3 - nonprofits, charities, NGOs
- G4 - corporations
- G5 - online communities
- G9 - personal

### Technology

Indicates the technology used to create or present the resource

- X0 - web technologies
  - X0.0 - HTML
    - X0.0.5 - HTML5
  - X0.1 - CSS
  - X0.2 - JavaScript
    - X0.2.9 - TypeScript
  - X0.3 - PHP
    - X0.3.1 - PHPBB
  - X0.5 - Flash
- X2 - image formats
- X3 - audio formats
- X4 - video formats

### Date

#### Formats

- `D(40c BCE)` - 40th century BCE
- `D(621 BCE)` - 621 BCE
- `D(5c)?` - probably 5th century
- `D(1923)` - 1923
- `D(1923-05)` - May 1923
- `D(1923-05-01)` - May 1, 1923

#### Events

- D0 - date authored / created
  - `D0(1991)` - authored 1991
- D1 - date published
  - `D1(2010s)` - published in the 2010s
- D2 - date translated
- D3 - date archived
- D9 - date retrieved / added to collection

### People

#### Roles

- A0 - author
  - N1A0 - first author
  - N2A0 - second author
- A2 - translator

#### Name formats

- 0.0 - Title, prefix, honorific
- 0.1 - given name(s)
- 0.2 - family name(s), patronymic, etc.
- 0.3 - suffix

#### Examples

- `A0(Laozi)?` - apocryphally authored by Laozi (Lao Tzu)
- `A0.1(Mario) A0.2(Vargas Llosa)`
- `A0.1(Richard P.) A0.2(Gabriel)`
- `A0.1(Martin) A0.2(Luther)`
- `A0.0(Dr.) A0.1(Martin Luther) A0.2(King) A0.3(Jr.)`
- `N1A0.2(Zhang)` - first author's family name is Zhang
- `A0.0(King) A0.1(Henry) A0.3(VIII)`

### Language

- `L(English)`
- `L(Finnish)`, `L(Suomi)`
