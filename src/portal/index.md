<!DOCTYPE html>
<html lang="en">
<head>
<title>{{title}}</title>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="alternate" type="application/rss+xml" title="RSS" href="https://benchristel.com/feed.rss">
<style>
* {
  box-sizing: border-box;
}
:root {
  --body-width: 68em;
  --align: left;
  --hyphens: manual;
  --font-size: 0.9375rem;
  --body-font-family: 'Trebuchet MS', 'Verdana', sans-serif;
  --heading-font-family: var(--body-font-family);
  --line-height: 1.4;
  --font: var(--font-size) / var(--line-height) var(--body-font-family);
  --global-bg: linear-gradient(to bottom, #7496b7 66%, hsl(311.5, 5%, 62%));
  --burgundy: hsl(-29, 100%, 25%);
  --brown: hsl(-29, 15%, 15%);
  --blue: hsl(209.6, 100%, 25%);
  --container-bg: #fafafa;
  --border-color: #bbb;
  background: var(--global-bg);
  background-attachment: fixed;
  font: var(--font);
  text-align: var(--align);
  hyphens: var(--hyphens);
  overflow-y: scroll;
}
body {
  max-width: var(--body-width);
  margin: 1rem auto;
}
.container {
  margin: 0 1rem;
  box-shadow: 0 0 10px #0006;
  border-radius: 9px;
  background: var(--container-bg);
  padding: 4px;
  padding-block-end: 4rem;
  color: #112;
}
header {
  background: url(landscape.jpg), linear-gradient(110deg, #789, #9e95aa);
  border-radius: 5px 5px 0 0;
  background-size: cover;
  background-position: 50% 45%;
  padding: 2em 2.75em;
  color: #fff;
  text-shadow: 0 0 6px #000;
}
header > * {
  display: inline-block;
  vertical-align: middle;
}
main {
  padding-inline: 2.75rem;
}
@media (max-width: 760px) {
  body { margin: 0 }
  .container {padding-inline: 0; padding-block-start: 0; border-radius: 0; margin: 0; }
  header { border-radius: 0; }
  main, header { padding-inline: 1rem; }
}
h1, h2, h3 {
  font-weight: bold;
  font-family: var(--heading-font-family);
  color: #000;
}
h1 {
  font-size: 175%;
  margin-block: 0;
  padding-right: 1em;
  vertical-align: -0.2em;
  color: #fff;
}
h2 {
  margin-block: 3rem 1rem;
  border-block-end: 1px solid var(--border-color);
  font-size: 150%;
  font-weight: normal;
}
h3 {
  margin-block-start: 1.25rem;
  font-size: 100%;
  background: #eee;
  margin-inline: -0.33em;
  padding-inline: 0.33em;
}
a:not(.webring-container *) {
  text-decoration: underline;
  text-decoration-color: var(--border-color);
  text-decoration-skip-ink: none;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 1px;
  padding-block: 0.3em;
  margin-block: -0.3em;
}
a { color: var(--blue); }
a:visited { color: hsl(311.5, 50%, 25%); }
ul {
  margin-block: 0;
  padding-inline-start: 1.1em;
}
li {
  margin-block-end: 0.33em;
  padding-inline-start: 1em;
  text-indent: -1em;
  break-inside: avoid;
}
li > p {
  /* prevent the first list item in a column from being shifted down */
  margin-block-start: 0;
}
.col-2, .col-3, .col-4 {
  display: none;
}
:is(.col-2, .col-3, .col-4) + * {
  text-align: start;
  hyphens: manual;
  column-gap: 4em;
}
.col-2 + * { column-count: 2; }
.col-3 + * { column-count: 3; }
.col-4 + * { column-count: 4; }
@media (max-width: 760px) {
  :is(.col-2, .col-3, .col-4) + * {
    column-count: 1;
  }
}
.breadcrumb {
  display: inline;
  vertical-align: middle;
}
.breadcrumb > a:first-child {
  vertical-align: -3px;
}
.breadcrumb > a:first-child::after {
  vertical-align: 3px;
}
.breadcrumb > a::after {
  display: inline-block;
  width: 2em;
  text-align: center;
  content: '➤';
  color: #ddd;
  font-size: 0.9em;
}
code { white-space: pre-wrap; }
sup, sup > a {
  /* don't let footnote refs mess with line spacing */
  line-height: 0;
}
sup > a {
  /* Georgia doesn't have lining-nums */
  font-family: 'Times New Roman', serif;
  font-weight: bold;
  padding-inline: 0.25em;
}
num {
  /* Georgia doesn't have lining-nums */
  font-family: 'Times New Roman', 'Liberation Serif', serif;
  font-variant-numeric: lining-nums;
}
.centered-text {
  text-align: center;
}
.space-8 {
  height: 0.5rem;
  width: 0.5rem;
}
.space-32 {
  height: 2rem;
  width: 2rem;
}
.sr-only {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.lr-split {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-block-end: 1px solid #bbb;
  margin-block-start: 4px;
  margin-inline: -2.75em;
  padding: 1em;
}
@media (max-width: 760px) {
  .lr-split {
    display: block;
    border-radius: 0;
    border-inline: none;
    margin-inline: -1rem;
  }
}
.lr-split > * {
  flex-basis: 47%;
  flex-shrink: 1;
}
.toc ul {
  padding: 0;
  text-align: start;
}
.toc li {
  display: inline-block;
  margin: 0.25em 0.33em;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}
.lr-split h2 {
  margin-block: 0;
  margin-inline: -0.25em;
  border: none;
  background: #0001;
  padding-inline: 0.5em;
  font-size: 1.1rem;
  font-weight: bold;
}
input[type=search] {
  margin: 0 auto 0.8rem;
  display: block;
  width: 90%;
  border-radius: 99px;
  border: 1px solid #666;
  border-color: #666 #888 #aaa #888;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="rgb(170,170,170)" class="size-4"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>');
  background-size: 20px 20px;
  background-position: 10px 3px;
  background-repeat: no-repeat;
  background-color: #fff;
  padding: 7px 34px 5px;
  box-shadow: inset 0 1px 2px #0004;
}
.hypersearch-no-results {
  display: none;
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-block: 5rem;
}
.hypersearch-no-results-shown {
  display: block;
}
/* used for search keywords */
span[inert] {
  display: inline-block;
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
button {
  margin-block: 3px;
  min-height: 24px;
  min-width: 60px;
  background: #ddd;
  border: 1px solid #0007;
  border-radius: 5px;
  box-shadow: inset 0px 2px #fffc, inset 2px 0px #0001, inset -2px 0px #0001, inset 0px -2px #0002;
  padding: 2px 8px;
  cursor: pointer;
}
button:hover {
  background: #d6d6d6;
}
button:active {
  background: #d6d6d6;
  box-shadow: inset 2px 0px #0002, inset 0px 2px #0002,
    inset -2px 0px #fff8, inset 0px -2px #fff8;
}
div.wwwebring-widget {
  background: #eee !important;
  border: outset 2px #fff !important;
  box-shadow: 1px 1px #0005, 0 0 0 1px #0002;
}
.webring-container {
  display: table;
  margin: 2em auto;
}
/* ensure scrollbar tracks are displayed even if the page content
 * does not need to scroll, to prevent horizontal jitter when
 * searching */
html {
  overflow-y: scroll;
}
</style>
</head>
<body>
<div class="container">
  <header>
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/welcome.html" style="color:#fffa"><span class="sr-only">Home</span><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:16px;height:16px"><path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" /></svg></a>
    </nav>
    <h1>Web Portal</h1>
  </header>
<main>
<div class="lr-split">
<search>
  <h2 id="search" class="sr-only">Search</h2>
  <div style="text-align: center">
    <input data-hypersearch type="search" list="search-shortcuts" placeholder="Search the web and this page" aria-labelledby="search"/>
    <button id="ddg" data-search="https://html.duckduckgo.com/html?q=%s">DuckDuckGo</button>
    <button id="marginalia" data-search="https://old-search.marginalia.nu//search?query=%s">Marginalia</button>
    <button id="yt" data-search="https://youtube.com/results?search_query=%s">YouTube</button>
    <button id="npm" data-search="https://www.npmjs.com/search?q=%s">NPM</button>
    <button id="openverse" data-search="https://openverse.org/search/?q=%s">Openverse</button>
    <button id="wikipedia" data-search="https://en.wikipedia.org/w/index.php?search=%s">Wikipedia</button>
    <!-- <button id="cornish" data-search="https://cornishdictionary.org.uk/#%s">Cornish Dict.</button> -->
    <button id="etymonline" data-search="https://www.etymonline.com/search?q=%s">Etymonline</button>
    <button id="wiktionary" data-search="https://en.wiktionary.org/wiki/%s">Wiktionary</button>
    <button id="unicode" data-search="https://unicodeplus.com/search?q=%s">Unicode</button>
    <div class="space-8"></div>
    <div><small><a href="/portal/search-docs.html">Help with Search</a></small></div>
    <div class="space-8"></div>
    <datalist id="search-shortcuts">
      <option value="!mdn" label="!mdn - Mozilla Developer Network" data-search="https://developer.mozilla.org/en-US/search?q=%s"></option>
      <option value="!youtube" data-search="https://youtube.com/results?search_query=%s"></option>
      <option value="!wikipedia" data-search="https://en.wikipedia.org/w/index.php?search=%s"></option>
      <option value="!protondb" data-search="https://www.protondb.com/search?q=%s"></option>
      <option value="!steamdb" data-search="https://steamdb.info/search/?a=all&q=%s"></option>
      <option value="!emoji" data-search="https://emojipedia.org/search?q=%s"></option>
      <option value="!stackexchange" data-search="https://stackexchange.com/search?q=%s"></option>
    </datalist>
  </div>
</search>
<nav class="toc" aria-labelledby="table-of-contents">
<h2 id="table-of-contents" style="margin-bottom:0.5em">Table of Contents</h2>

- [Food](#food)
- [Art](#art)
- [Music](#music)
- [Meditation](#meditation)
- [Official Sites](#official-websites)
- [Civilization](#reviving-civilization)
- [Software Dev](#software-development)
- [Free Images](#image-repositories)
- [Web-based Tools](#web-based-tools)
- [Commerce](#commerce)
- [Housekeeping](#housekeeping)
- [Architecture](#architecture)
- [Books](#books)
- [Games](#games--gaming)
- [Languages](#languages-and-linguistics)
- [History of Tech](#history-of-technology)
- [Databases](#publicly-available-data)
- [General](#general-reference)
- [Researchers](#information-researchers)
- [Web Curators](#web-curators)
- [My Projects](#my-projects)
- [Webring](#webring)
- [Settings](#settings)

</nav>
</div>

<div class="hypersearch-no-results">No results.</div>

<div data-hypersearch-start></div>

## Food

### Favorite Recipes (all vegetarian) <span inert>cookbook cooking</span>

<div class="col-3"></div>
{{toc /recipes}}

### Recipes Elsewhere <span inert>cookbook cooking</span>

<div class="col-2"></div>

- [Indian Healthy Recipes](https://indianhealthyrecipes.com/)
- [Dassana's Veg Recipes](https://www.vegrecipesofindia.com/) - Indian recipes
- [Ozlem's Turkish Table](https://ozlemsturkishtable.com/)
- [Binnur's Turkish Cookbook](https://binnurturkishcookbook.blogspot.com/)
- [Maangchi](https://maangchi.com/) - Korean recipes
- [Korean Bapsang](https://koreanbapsang.com/)
- [My Korean Kitchen](https://mykoreankitchen.com/)
- [Pardon Your French](https://www.pardonyourfrench.com/)
- [Gode Cookery](http://www.godecookery.com/) - A webring of medieval cooking sites (h/t [Cidoku])
- [Cedar Down Farm](https://cedardownfarm.ca/)
- [rmf's recipes on baccyflap.com](https://baccyflap.com/res/recipes/)

### Merchants

- [Sunridge Farms](https://sunridgefarms.com/) - Organic bulk goods, including grains and beans. <span inert>bulk wholesale</span>
- [Monterey Bay Herb Company](https://herbco.com/) <span inert>bulk wholesale</span> - Tea, herbs, and spices for very competitive prices.
- [Rancho Gordo](https://www.ranchogordo.com/) - Beans!

## Art

- [Celtic Art by Jen Delyth](http://celticartstudio.com/)

## Music

See Channel 3 of [Culture Machine](https://tv.benchristel.com/).

### Discovery

- [Every Noise at Once](https://everynoise.com) - A catalog of all music on Spotify by algorithmically-inferred genre. An incredible work of data science by [Glenn McDonald](https://www.furia.com)
- [Album of the Year](https://www.albumoftheyear.org/) - browse music by release year, going back to the early 1900s. [Here's 1920](https://www.albumoftheyear.org/1920/releases/).
- [The Lost Media Wiki](https://lostmediawiki.com) - Some lost and found, others just lost.
- [The Roud Folksong Index](https://archives.vwml.org/search/roud) - a database of around 25,000 English and Scottish folk songs, compiled by Steve Roud. See also the [List of Folk Songs by Roud Number on Wikipedia](https://en.wikipedia.org/wiki/List_of_folk_songs_by_Roud_number) and the [Roud Folk Song Index series on MusicBrainz](https://musicbrainz.org/series/4e817004-53ed-438e-96da-88e27fb8d872).
- [List of the Child Ballads on Wikipedia](https://en.wikipedia.org/wiki/List_of_the_Child_Ballads) - another list of English and Scottish folk songs.
- [Musical Traditions](https://www.mustrad.org.uk/) - "The Magazine for Traditional Music throughout the world"

### Buying / Downloading

- [Qobuz](https://www.qobuz.com) - High-quality MP3 downloads. They have an extensive catalog (including every obscure album I've searched for so far).
- [Bandcamp](https://bandcamp.com/) - self-publishing for indie artists.

### Streaming

- [Culture Machine](https://tv.benchristel.com/) - Channel 3 plays my favorite albums on shuffle
- [Deezer](https://deezer.com)

### Sheet Music

- [Münich DigitiZation Center](https://www.digitale-sammlungen.de/en/) - search archives of sheet music and manuscripts
- [_Alexander's Feast_ - Händel](https://daten.digitale-sammlungen.de/0001/bsb00016738/images/index.html?fip=193.174.98.30&seite=17&pdfseitex=)

### Lyrics

- [Mainly Norfolk](https://mainlynorfolk.info) - "English Folk and Other Good Music"
- [Lyrics Translate](https://lyricstranslate.com/) - multilingual lyrics
- [Universo Cantigas](https://universocantigas.gal/) - "Edición Crítica da Poesía Medieval Galego-Portuguesa." In Galician.
- [The LiederNet Archive](https://www.lieder.net/)  - "the world’s largest reference archive of texts and translations of art songs and choral works."
- [Musica International](https://www.musicanet.org/en/) - "The Virtual Choral Library"

### Visualizers

- [Butterchurn](https://butterchurnviz.com/) - online music visualizer.

## Meditation

### Theory

- [_The Mind Illuminated_ (book)](https://www.goodreads.com/book/show/25942786-the-mind-illuminated) ([subreddit](https://www.reddit.com/r/TheMindIlluminated/))
- [OnThatPath's Video Series](/meditation/on-that-path-video-summaries.html)
  <hs-meta keywords="on that path"></hs-meta>
- [Coping with intrusive thoughts](https://www.bruh.ltd/blog/coping-with-intrusive-thoughts/)
  by Ruby Klover — this also happens to be good advice in general.
- [Meditation and Going Beyond Mindfulness - A Secular Perspective | Mingyur Rinpoche](https://benchristel.github.io/yt/#ukTaodQfYRQ)
- [Happiest Man on Earth | Mingyur Rinpoche](https://benchristel.github.io/yt/#kaNO09cPS6c)
- [From Panic Attacks to Meditation | Mingyur Rinpoche](https://benchristel.github.io/yt/#k1tw5sowFyM)
- [Meditate Better | Swami Sarvapriyananda](https://benchristel.github.io/yt/#GGYGxdcdE40)
- [Non-dual Meditation: Part 1 | Swami Sarvapriyananda](https://benchristel.github.io/yt/#l3vddQwxA48)
- [Non-dual Meditation: Part 2 | Swami Sarvapriyananda](https://benchristel.github.io/yt/#dVKS8jhXN2s)
- [Rational Dharma](https://rationaldharma.com/) - no-nonsense explanations of how meditation works.
- [Effects of Two Online Positive Psychology and Meditation Programs on Persistent Self-Transcendence](https://psycnet.apa.org/fulltext/2021-81896-001.html) - research on enlightenment

### Practice

- [Meditation timer with water sound](https://benchristel.github.io/meditation/)

- [Culture Machine](https://tv.benchristel.com/) — for practicing the Middle
  Way between desire and aversion.

- **Sit, Breathe, Wake Up! Guided meditations by Culadasa**
  - [One - Awareness (40 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=UG-0XGpesgs)
  - [Two - Attention (43 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=IeXWFRs5cGk)
  - [Three - Moving and Stable Attention (46 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SRqXq570Cf0)
  - [Four (21 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=aNFc4veG61E)
  - [Five (35 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=gB4_JS4jsb0)
  - [Six (59 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=F-SO2jLEl94)
  - [Seven (52 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=LBDV7jmZL8s)
  - [Eight (46 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=nbvx7K_Zh0U)
  - [Nine - Metta (25 minutes)](https://benchristel.github.io/yt/#https://www.youtube.com/watch?v=SpTDGyhoFho)

## Official Websites

This section is for the official web presences of non-web entities.

### Software - Apps and Plugins

<div class="col-3"></div>

- [Firefox](https://firefox.com/) <hs-meta keywords="mozilla"></hs-meta>
- [Firefox Browser Add-ons](https://addons.mozilla.org/) <hs-meta keywords="plugins extensions addons"></hs-meta>
- [Gimp](https://gimp.org) - [docs](https://docs.gimp.org)
- [kdenlive](https://kdenlive.org/) - Video editor for Linux
- [LeechBlock](https://www.proginosko.com/leechblock/)
- [OpenShot](https://www.openshot.org/) - Video editor for Linux
- [Surfraw](http://surfraw.org/)
- [uBlock Origin](https://ublockorigin.com/)

### Software - Games

- [Heroes of Might and Magic](http://www.heroesofmightandmagic.com/heroes4/heroesofmightandmagic4iv.shtml)
- [Zero-K](https://zero-k.info)

### Software - Operating Systems, Dev Tools, and Libraries

<div class="col-4"></div>

- [Arch Linux](https://archlinux.org/)
- [Bun](https://bun.sh/)
- [CodeMirror](https://codemirror.net/)
- [DuckDB](https://duckdb.org)
- [ESLint](https://eslint.org/)
- [eslint.style](https://eslint.style/)
- [ExpressJS](https://expressjs.com/)
- [Flathub](https://flathub.org/)
- [GNU `make`](https://www.gnu.org/software/make/manual/html_node/index.html)
- [Homebrew](https://brew.sh)
- [Husky](https://typicode.github.io/husky/)
- [JetBrains](https://www.jetbrains.com/)
- [jq](https://jqlang.github.io/jq/manual/)
- [Linux (kernel.org)](https://kernel.org)
- [Linux Mint](https://www.linuxmint.com/) - [forums](https://forums.linuxmint.com/)
- [Lit](https://lit.dev/)
- [Marked](https://marked.js.org/)
- [MathJax](https://mathjax.org)
- [NodeJS](https://nodejs.org/)
- [PeerJS](https://peerjs.com/)
- [Playwright](https://playwright.dev/)
- [pnpm](https://pnpm.io/)
- [Preact](https://preactjs.com/)
- [Prettier](https://prettier.io)
- [Python](https://python.org/)
- [React](https://react.dev/)
- [Ruby](https://www.ruby-lang.org/)
- [TypeScript](https://typescriptlang.org/)
- [Visual Studio Code](https://code.visualstudio.com/) <hs-meta keywords="vscode"></hs-meta>
- [Vite](https://vite.dev/)
- [WebAssembly](https://webassembly.org/)
- [Yarn v1](https://classic.yarnpkg.com/lang/en/)
- [Yarn v3](https://v3.yarnpkg.com/)
- [Yarn v4](https://yarnpkg.com/)
- [Zod](https://zod.dev/)

### Software - Specifications <hs-meta keywords="reference"></hs-meta>

<div class="col-3"></div>

- [C++](https://en.cppreference.com/w/) <hs-meta keywords="cpp"></hs-meta>
- [ECMAScript](https://ecma-international.org/publications-and-standards/standards/ecma-262/) a.k.a. JavaScript
- [GraphQL Specification](http://spec.graphql.org)
- [JSDoc](https://jsdoc.app/)
- [json.org](https://json.org/)
- [jwt.io](https://jwt.io/) - JSON Web Tokens
- [RSS 2.0 Specification](https://www.rssboard.org/rss-specification). [Mirror](https://cyber.harvard.edu/rss/rss.html).
- [Atom Syndication Format Specification](https://www.rfc-editor.org/rfc/rfc4287)
- [HTML Specification](https://html.spec.whatwg.org)
- [URL Specification](https://url.spec.whatwg.org)
- [Semantic Versioning](https://semver.org)

### U.S. Government

- [Bureau of Labor Statistics](https://data.bls.gov)
- [Federal Aviation Administration](https://www.faa.gov/)
- [Internal Revenue Service](https://www.irs.gov/)

### Academic <hs-meta keywords="academia university universities"></hs-meta>

<div class="col-3"></div>

- [Carnegie Mellon](https://cmu.edu)
- [Foothill College](https://foothill.edu)
- [Harvard](https://harvard.edu)
- [MIT](https://mit.edu)
- [North Dakota State University](https://ndsu.edu)
- [Penn State](https://psu.edu)
- [Pitt](https://pitt.edu)
- [Stanford](https://stanford.edu)
- [Universitat Politècnica de Catalunya](https://www.upc.edu)
- [University of Colorado](https://colorado.edu)
- [University of Michigan](https://umich.edu)
- [Willamette](https://willamette.edu)
- [Palo Alto Unified School District](https://pausd.org/)

### Businesses <hs-meta keywords="merchants"></hs-meta>

<div class="col-3"></div>

- [Framework Laptops](https://frame.work)
- [WASD Keyboards](https://www.wasdkeyboards.com)
- [Sunridge Farms](https://sunridgefarms.com/)
- [Monterey Bay Herb Company](https://herbco.com/)
- [Rancho Gordo](https://www.ranchogordo.com/)
- [Fidelity](https://fidelity.com/)
- [Capital One](https://capitalone.com/)
- [Stanford Federal Credit Union](https://sfcu.org/)
- [Rolling Stone Magazine](https://www.rollingstone.com/)
- [Powell's Bookstore](https://www.powells.com/)
- [Venmo](https://venmo.com)

### Nonprofits and Charities

- [Kiva](https://kiva.org/)
- [Khan Academy](https://khanacademy.org/)

### Other Organizations

<div class="col-3"></div>

- [Caltrain](https://www.caltrain.com/) - [schedules](https://www.caltrain.com/schedules/pdfs) <hs-meta keywords="timetables tables"></hs-meta>
- [KDE](https://kde.org/)
- [World Wide Web Consortium](https://w3.org)
- [WHATWG](https://whatwg.org) - The Web Hypertext Application Technology Working Group
- [Alan Watts](https://alanwatts.org/)
- [Deming](https://deming.org/)
- [Dewey Decimal System](https://dewey.org/)

## Reviving Civilization

- [A Solarpunk Manifesto](https://www.re-des.org/es/a-solarpunk-manifesto/). [Mirrored at Skyhold.org](https://skyhold.org/solarpunk/index.html).
- [Skyhold's list of solarpunk and collapsepunk resources](https://skyhold.org/solarpunk/links.html)
- [Diome](https://diome.xyz/0+%F0%9F%8C%9E+About/0.0+Technology+for+a+Regenerative+Civilization) - Technology for a regenerative civilization. By Andrea Farias.
- [Meaningness](https://meaningness.com/) by [David Chapman](https://meaningness.com/about-my-sites). A work-in-progress philosophy book.
- [Life Itself](https://lifeitself.org/)

## Software Development

### Literature

<div class="col-2"></div>

- [The Art of Unix Programming](http://www.catb.org/esr/writings/taoup/html/), by [Eric S. Raymond](http://catb.org/). Compre&shy;hensive, eloquent, and mind-expanding. If you only read one book on software design and development, this should be it. Available as HTML at the above link, but please consider supporting the author by buying the [print edition](https://www.informit.com/store/art-of-unix-programming-9780131429017).
- [why's (poignant) guide to ruby](https://poignant.guide/) - If you're going to read more than one book on software, this should be the first one.
- [How Complex Systems Fail](https://how.complexsystems.fail/) - A short treatise by Richard I. Cook, MD. A must-read for any manager in a software organization.
- [Structure and Interpretation of Computer Programs (PDF)](https://web.mit.edu/6.001/6.037/sicp.pdf) by Abelson, Sussman, and Sussman.
- [John Lions' "Commentary on the Sixth Edition Unix Operating System"](http://www.lemis.com/grog/Documentation/Lions/)
- [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/) by Remzi and Andrea Arpaci-Dusseau.
- [The Systems Bible (Systemantics 3rd Ed.)](https://www.generalsystemantics.com/product/the-systems-bible/) by John Gall
- [Martin Kleppmann's Website](https://martin.kleppmann.com/) - research on distributed, local-first, and peer-to-peer systems.
- [Beautiful Software](https://www.buildingbeauty.org/beautiful-software) - a course in Christopher Alexander's methods and philosophy, for software people. See also the reading list at [beautiful.software](https://beautiful.software/)
- [Dreamsongs.com](https://dreamsongs.com) - Richard P. Gabriel's personal site, containing his poetry and essays about Lisp, Christopher Alexander, and software.
- [Pivotal Alumni Codex](https://alumni-codex.github.io/) - Resources compiled by former Pivots, including lists of [recommended tech videos](https://alumni-codex.github.io/engineering/tech-videos/), [Pivotal Labs-like consultancies](https://alumni-codex.github.io/consultancies/), [developer tools](https://alumni-codex.github.io/tools/) and [newsletters](https://alumni-codex.github.io/newsletters/). Maintained by [Davis W. Frank](https://dwf.bigpencil.net/).
- [The C2 Wiki](https://wiki.c2.com/) - the original Wiki. Code by [Ward Cunningham](https://c2.com/), text by many contributors.
- [Eloquent Javascript](https://eloquentjavascript.net/) - web book by [Marijn Haverbeke](https://marijnhaverbeke.nl/)
- [Crafting Interpreters](https://craftinginterpreters.com/) - If you've ever wanted to make your own programming language, this is the book for you. By Robert Nystrom. Available in print and (free!) HTML.
- [User Interface Design for Programmers](https://www.joelonsoftware.com/category/uibook/) by Joel Spolsky.
- [Programming as Theory Building](https://pablo.rauzy.name/dev/naur1985programming.pdf) by Peter Naur, 1985.
- [On the criteria to be used in decomposing systems into modules](https://dl.acm.org/doi/pdf/10.1145/361598.361623) - David Parnas, 1972.
- [The Emperor's Old Clothes](https://worrydream.com/refs/Hoare_1981_-_The_Emperors_Old_Clothes.pdf) 1981 Turing Award lecture by C.A.R. Hoare. <span inert>Sir Charles Antony (Tony) Richard Hoare</span>
- [The Beautiful Mess](https://cutlefish.substack.com) - John Cutler's newsletter on product management and software development.
- [Manifesto for Agile Software Development](http://agilemanifesto.org/) - Read this before you hate on "Agile."
- [_Communications of the ACM_](https://cacm.acm.org/), an open-access journal published by [the Association for Computing Machinery](https://acm.org).
- [As We May Think](https://dl.acm.org/doi/pdf/10.1145/227181.227186) - Vannevar Bush on hypertext. 1945.
- [Out of the Tar Pit](https://github.com/papers-we-love/papers-we-love/blob/main/design/out-of-the-tar-pit.pdf) - Ben Moseley and Peter Marks, 2006.

### Classic blog posts, talks, &amp;c.

<div class="col-2"></div>

- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/) - Joel on Software
- [Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/) - Patrick McKenzie
- [Falsehoods Programmers Believe About Time](https://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time) - Noah Sussman
- [PHP: a fractal of bad design](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/) - Evelyn Woods
- [Making Badass Developers (Video)](https://benchristel.github.io/yt#FKTxC9pl-WM) - Kathy Sierra <span inert>videos</span>
- [Parse, don't validate](https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/) - Alexis King
- [Local-first software: You own your data, in spite of the cloud](https://www.inkandswitch.com/local-first/) - Kleppmann, Wiggins, van Hardenberg, and McGranaghan
- [Boundaries (Video)](https://www.destroyallsoftware.com/talks/boundaries) - Gary Bernhardt <span inert>videos</span>
- [Functional Core, Imperative Shell (Video)](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell) - Gary Bernhardt <span inert>videos</span>
- [Wat (Video)](https://www.destroyallsoftware.com/talks/wat) - Gary Bernhardt <span inert>videos</span>
- [A Whole New World (Video)](https://www.destroyallsoftware.com/talks/a-whole-new-world) - Gary Bernhardt <span inert>videos</span>
- [The Birth and Death of JavaScript (Video)](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) - Gary Bernhardt <span inert>videos</span>
- [Agile is Dead (Video)](https://www.youtube.com/watch?v=a-BOSpxYJ9M) - Dave Thomas <span inert>videos</span>
- [TDD: Where did it all go wrong? (Video)](https://www.youtube.com/watch?v=EZ05e7EMOLM) - Ian Cooper <span inert>videos</span>
- [Experience Report: The WyCash Portfolio Management System](https://dl.acm.org/doi/pdf/10.1145/157709.157715) - Ward Cunningham, OOPSLA '92
- [The pedantic checklist for changing your data model in a web application](https://rtpg.co/2021/06/07/changes-checklist.html) - Raphael Gaschignard
- [The Divio Documentation System](https://docs.divio.com/documentation-system/) - the four types of documentation: tutorials, how-tos, reference, and explanation.
- [What's in a Name? Anti-patterns to a Hard Problem](https://www.sitepoint.com/whats-in-a-name-anti-patterns-to-a-hard-problem/) - Katrina Owen <span inert>idea fragment implementation</span>
- [Naming as a Process](https://www.digdeeproots.com/articles/on/naming-process/) - Arlo Belshee <span inert>naming is a process not a single step</span>

### Reference

<div class="col-2"></div>

- [Refactoring.com](https://refactoring.com/) - Martin Fowler's site with descriptions of the refactorings from his book _Refactoring: Improving the Design of Existing Code_.
- [Wikifunctions](https://www.wikifunctions.org/wiki/Wikifunctions:Main_Page) - "the free library of \[2500+\] functions that anyone can edit"
- [UnicodePlus.com](https://unicodeplus.com) - search for unicode characters. See also [Unicode.org](https://home.unicode.org/) for general information about Unicode.
- [Emojipedia](https://emojipedia.org) - search for emoji
- [man7.org](https://man7.org/) - Unix manual pages
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - on [css-tricks.com](https://css-tricks.com)
- [caniuse.com](https://caniuse.com) - Find out which browsers support a given feature (in JavaScript, CSS, HTML, or SVG).
- [MemoryManagement.org](https://www.memorymanagement.org/) - Approaches to garbage collection and more.
- [List of Common MIME Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types) on MDN
- [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) <hs-meta keywords="ts"></hs-meta>

### Q&A

- [Stack Overflow](https://stackoverflow.com)
- [Ask Ubuntu](https://askubuntu.com)
- [Superuser](https://superuser.com/)

### Web Hosting

- [Neocities](https://neocities.org) - Free, indie, social web hosting. A spiritual successor to Geocities.
- [EU.org](https://nic.eu.org/) - Free subdomain names for individuals and nonprofits.
- [surge.sh](https://surge.sh) - Put any folder of HTML files on the web instantly.
- [codeberg.org](https://codeberg.org/) - Free indie git hosting.
- [js.org](https://js.org) - Free subdomains for JavaScript projects using [GitHub Pages](https://pages.github.com/).
- [List of MediaWiki hosting providers](https://www.mediawiki.org/wiki/Hosting_services) - Create your own wiki!

### UI/UX Design

- [Apple Human Interface Guidelines 1980–2013 (archive.org)](https://archive.org/details/apple-hig/1980_Lisa_UI_Standards/) - and TBH I don't care about any of the later versions.<hs-meta keywords="hig lisa newton macintosh macosx ii nextstep"></hs-meta>
- [Ask Tog](https://asktog.com/) - Bruce Tognazzini (early employee at Apple)'s thoughts on UX design.
- [Laws of UX](https://lawsofux.com/) - Facts about humans that every designer should keep in mind!
- [Contrast Rebellion](https://contrastrebellion.com/) - A manifesto against low-contrast websites.
- [CSS Fonts (cssfontstack.com)](https://www.cssfontstack.com/) - lists web-safe fonts that most computers have installed, so you can craft `font-family` values that will look good cross-platform.
- [Modern Font Stacks](https://modernfontstacks.com/) - cross-platform `font-family` values for over a dozen typeface styles.
- [David Jonathan Ross Fonts](https://djr.com/)
- [Vollkorn Font](http://vollkorn-typeface.com/)
- [Google Fonts](https://fonts.google.com/) - Free downloadable fonts for your website. You can also hotlink them, but that will let Google surveil your users.
- [Recursive](https://www.recursive.design/) - A variable font that blends sans, handwritten, and monospace styles.
- [Practical Typography](https://practicaltypography.com/) by Matthew Butterick (h/t [Ruby](https://www.bruh.ltd/))
- [Programming Fonts](https://www.programmingfonts.org/) - Online playground for trying out programming fonts. Favorites include [Comic Shanns](https://github.com/shannpersand/comic-shanns), [Mensch](https://robey.lag.net/2010/06/21/mensch-font.html), and [Monaspace Xenon](https://monaspace.githubnext.com/).

### Tools I Currently Use

See also [my /uses page](/uses).

<div class="col-2"></div>

- [Bundlephobia](https://bundlephobia.com) - View the size and composition of NodeJS / JavaScript packages on NPM. Includes comparisons to similar libraries. Useful for keeping your JS bundles small.
- [jsdelivr](https://jsdelivr.com/) - CDN that distributes code from NPM and GitHub, with neat features like automatic minification.
- [Namecheap](https://namecheap.com/) - Domain registrar
- [Markdown] - Lightweight markup syntax that bridges the gap between plain text and HTML. Designed by [John Gruber](https://daringfireball.net).
- [@regosen/gapless-5](https://www.npmjs.com/package/@regosen/gapless-5) - gapless and looped audio playback on the web. Essential if you're building a music player.
- [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) - TypeScript assertion library that does type narrowing.
- [Cloudflare](https://cloudflare.com) - Static/serverless web host and CDN.
- [Render.com](https://render.com) - Web app hosting
- [WCAG Contrast Checker Extension (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/wcag-contrast-checker/)<span inert>add-ons addons plugin a11y accessibility</span> - Tells you about any elements on your webpage that don't have WCAG AA or AAA-compliant contrast. See also the [Chrome](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf) and [Edge](https://microsoftedge.microsoft.com/addons/detail/wcag-color-contrast-check/idahaggnlnekelhgplklhfpchbfdmkjp) versions.
- **axe DevTools for Web Accessibility Testing** - check any webpage for accessibility problems. Extensions for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/), [Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd), and [Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn).<span inert>add-ons addons plugin a11y accessibility</span>
- [searchpass](https://github.com/larham/searchpass) - A shell script that checks if your password has been exposed in a data breach, *without* revealing it to anyone. If you're a programmer, you'll appreciate the elegant algorithm. Made by my colleague Larry Hamel.
- [uBlock Origin](https://ublockorigin.com/) - The ad blocker geeks use. Don't worry, there's nothing particularly geeky about it; it's just an ad blocker that works. Blocks trackers, too! Extensions for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/), [Chrome](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm), and [Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak).<span inert>add-ons addons plugin adblock</span>
- [MarkDownload](https://github.com/deathau/markdownload) - View and download the main content of most HTML pages as [Markdown]. Made by [Gordon Pedersen](https://death.id.au/). (h/t [Maya] via [Chris Aldrich](https://boffosocko.com/2020/12/29/markdownload-github/))

### Tips and Tricks, How Tos

- [Exclude commits from "git blame"](https://www.stefanjudis.com/today-i-learned/how-to-exclude-commits-from-git-blame/)
  - `git config blame.ignoreRevsFile .git-blame-ignore-revs`
  - useful if you have formatting commits that touch tons of code but make no functional changes.
- [Commit git hooks to repository](https://stackoverflow.com/a/54281447)
  - `git config --local core.hooksPath .githooks/`
  - Run this in your Makefile (e.g. after installing dependencies) to make it automatic
- [How to get RSS URLs from YouTube channels and playlists](https://chriswere.wales/articles/rss-youtube) by Chris Were.
  - It seems you can also paste YouTube channel URLs directly into at least some feed readers (tested with QuiteRSS). E.g. try this one: <https://www.youtube.com/@simonroper9218>.
- [Show or hide HTML elements for screenreaders only](https://css-tricks.com/inclusively-hidden/) using CSS.
- [Relative import paths need explicit file extensions in ECMAScript imports](https://www.totaltypescript.com/relative-import-paths-need-explicit-file-extensions-in-ecmascript-imports)
- [How to mount an HFS+ (macOS) drive as read-write on Linux (Debian-based)](https://unix.stackexchange.com/questions/639476/how-to-mount-hfs-drive-as-read-write-on-startup)
  - `apt install hfsprogs`
  - `sudo mount -o rw,remount,force /dev/sda2`

## Image Repositories<hs-meta keywords="free stock images"></hs-meta>

### General

- [Creative Commons Media Search](https://search.creativecommons.org/) - Search engine for images with permissive licenses. Also finds audio, video, and 3D models!
- [Wikimedia Commons](https://commons.wikimedia.org)

### Photos

- [Public Domain Pictures](https://www.publicdomainpictures.net) - constantly tries to trick you into clicking on ads for paid stock images, but nevertheless there _are_ public domain pictures on this site.
- [Flickr](https://flickr.com)

### Classic

- [Old Book Illustrations](https://www.oldbookillustrations.com/) - If you like [Wondermark](https://wondermark.com/), you'll love this.
- [Frugal's Free Image Database](https://www.thefrugalgamer.net/freeimages/) - A database of beautiful public domain book plates!
- [Public Domain Review](https://publicdomainreview.org/) - collections of public domain art (and books) (h/t [Melon]).
- [Hokusai Moyo Gafu](https://ndlsearch.ndl.go.jp/en/imagebank/theme/hokusaimoyo) - a catalog of fabric-dyeing patterns by Katsushika Hokusai.

### Computery

<div class="col-2"></div>

- [GifCities](https://gifcities.org/) - Archived gifs from Geocities websites.
- [TextureTown](https://textures.neocities.org/) - Thousands of textures to use in website backgrounds and 3D worlds.
- [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) - website backgrounds on Toptal.com (h/t [eev.ee](https://eev.ee/)).<span inert>tiling textures</span>
- [Background Tiles](https://background-tiles.com/) <span inert>tiling textures</span>
- [Hero Patterns](https://heropatterns.com/) - tiling SVG patterns for your website background<span inert>textures</span>
- [Pattern Monster](https://pattern.monster/) - even more tiling SVG patterns for your website background<span inert>textures</span>
- [nnnoise - SVG Noise Generator](https://www.fffuel.co/nnnoise/) - create fractal noise or turbulence dynamically with SVG. A very network-efficient replacement for PNG or JPEG textures.<span inert>background tiling</span>
- [Grainy Gradient Playground](https://grainy-gradients.vercel.app/) - dithered gradients for a retro (or is it futuristic?) look
- [IconsDB](https://www.iconsdb.com/)
- [Heroicons](https://heroicons.com/) - copy these SVG icons directly into your HTML. Nothing to download. Outline, solid, mini, and micro variants. (h/t [JT Archie](https://jtarchie.com/))
- [Cliparts.co](https://cliparts.co) - give your website, flyer, or email that ultimate kitschy look.

## Web-based Apps and Tools<hs-meta keywords="online browser-based"></hs-meta>

### Sensing

- [Time and Date](https://timeanddate.com/)
- [Epoch Converter](https://www.epochconverter.com/) - Converts dates to and from Unix epoch timestamps
- [Weather on DuckDuckGo](https://duckduckgo.com/?q=palo+alto+weather)
- [Accuweather](https://accuweather.com/)
- [Purple Air](https://map.purpleair.com/) - Crowdsourced monitoring of air quality near you!
- [Webtrak flight tracker](https://webtrak.emsbk.com/) - Tracks aircraft in your area. Pairs great with [FAA registry search](https://registry.faa.gov/AircraftInquiry/Search/NNumberInquiry). Stupid UI thing, though: if you don't want it to ask for / use your location, click "Cancel" at the initial prompt. Then you'll be able to select an airport from a list. <span inert>webtrack planes</span>

### Searching <span inert>web search engines</span>

- [Stract](https://stract.com/) - A search engine that lets you use customizable filters called [optics](https://stract.com/settings/optics) (h/t [Seirdy])
- [Search My Site](https://searchmysite.net) - A search engine that only returns results from personal sites. (h/t [C Jackdaw])
- [Wiby](https://wiby.me/)
- [Marginalia](https://marginalia-search.com/) (formerly [marginalia.nu](https://marginalia.nu/))
- [Million Short](https://millionshort.com/) - Filters out the top million (or thousand, or hundred) most popular websites from your search results. Subscription-based. (h/t [Cidoku])
- [Open Street Map](https://www.openstreetmap.org/) - Alternative to Google Maps. In addition to searching for locations, it can also provide [navigation directions](https://www.openstreetmap.org/directions).

### Calculating<span inert>calculators calculate</span>

- [PVIR Electrical Calculator](https://www.electricaltechnology.org/2014/03/power-voltage-current-resistance-pvir-calculator.html) - calculate power, voltage, current, or resistance.

### Creating

- [Excalidraw](https://excalidraw.com/) - Create hand-drawn-style SVGs and PNG images
- [TinkerCAD](https://www.tinkercad.com/) - 3D modeling online!
- [Flaming Text](https://flamingtext.com/) - Creates logos and typemarks. Not just flaming text, but glowing text, drop shadows, reflections, leopard print... the sky's the limit!
- [Dillinger.io](https://dillinger.io) - Online [Markdown] editor
- [Firefox theme creator](https://color.firefox.com/?theme=XQAAAAL6AAAAAAAAAABBKYhm849SCia2CaaEGccwS-xMDPsqu1p-XAF6EJDWcx9sS_Bi3JZH4KPzK-C2nG0G0z0EYOEN1uOojKq8xIkzQd7r6Lb_q5Whn0OXxiivqrZyadZXRncNouH8dON5uAlcixY_JS1naRZJs1_TXnHJS3Bp2orX6rzkWXrN_6M5wiHYKpJL5lHhwHuprDS2eb____dfIEA) - Essential if you can't stand FF's default low-contrast tabs.
- [Favicon.cc](https://www.favicon.cc/) - Draw website icons, pixel by pixel.

### Verifying

- [Dr. Link Check](https://www.drlinkcheck.com/) - Test for broken links on your website.
- [W3C HTML Validator](https://validator.w3.org/) - Check your HTML for problems that could cause it to display incorrectly in some browsers.

### Transforming

- [Dither it!](https://ditherit.com/) - Creates dithered versions of images, as seen on [Low Tech Magazine](https://solar.lowtechmagazine.com/). <span inert>dithering</span>
- [TinyPNG](https://tinypng.com/) - Reduces image filesizes.
- [Squoosh](https://squoosh.app/) - Another tool to reduce image filesizes.
- [JSONPath Online Evaluator](https://jsonpath.com/) - Evaluates JSONPath expressions against data.
- [Atmos.Style CSS Color Converter](https://atmos.style/color-converter/hsl-to-lch) - Converts between hex, RGB, HSL, and LCH. Also names the colors, which is a nice touch.
- [HTML to Markdown converter](https://htmlmarkdown.com)

### Publishing and Social

- [Bear Blog](https://bearblog.dev/) - Minimalist blogging platform
- [Off---line](https://off---line.com/) - Clone of Facebook circa 2007

### Prototyping

- [Regex 101](https://regex101.com/) - Evaluates and debugs regular expressions. Supports many regex dialects including PCRE and JavaScript.

### Other Lists of Tools

- [Dan's Tools](https://www.danstools.com/) - A list of web tools, most of which are data-converters.

## Commerce

- [AlternativeTo](https://alternativeto.net/) - Search for things you don't like, find things you don't know about!
- [Circular Living](https://circularlivingco.com)

## Housekeeping

{{toc /housekeeping}}

- [make your own soap - baccyflap.com](https://baccyflap.com/res/soap/)

## Architecture

- [The Christopher Alexander & Center for Environmental Structure Archive](https://christopher-alexander-ces-archive.org/)
- [Patterns at ArchitectureZ](https://patterns.architexturez.net/)
- [_The Nature of Order_](http://www.natureoforder.com/) - Christopher Alexander's magnum opus

## Books

- [Project Gutenberg](https://gutenberg.org/) - a repository of over 70,000 free, public domain ebooks
- [Wikisource](https://en.wikisource.org/wiki/Main_Page) - a free library of texts
- [Standard Ebooks](https://standardebooks.org/) - free and public domain ebooks with high-quality typesetting
- [Librivox.org](https://librivox.org) - free, public domain audiobooks read by volunteers
- [Very Small Rocks](https://verysmallrocks.io/fiction/) - Narrator David
  Clarke's site, including his audiobook podcast _Opera Vox_.
- [Google Books](https://books.google.com/)
- [Evertype](https://evertype.com) - Public domain books translated into many languages. A [Michael Everson](https://evertype.com/misc/bio.html) production (I think).
- [LibreTexts](https://commons.libretexts.org/) - Library of free online textbooks.
- [Better World Books](https://www.betterworldbooks.com/) - Save a tree! Buy used books!
- [Ex-Classics](https://exclassics.com/) - Books that were once favorites, and are now public domain.
- [Terebess Asia Online (TAO)](https://terebess.hu/english/tao.html) - Asian (and other) philosophy works, in many translations.
- [Sacred-Texts.com](https://sacred-texts.com/) - Religious texts, legends, and myths. Here's [The Kalevala](https://sacred-texts.com/neu/kveng/).
- [Folklore and Mythology Electronic Texts](https://sites.pitt.edu/~dash/folktexts.html) collected by D. L. Ashliman. (h/t [Cidoku])
- [Indie Bound](https://www.indiebound.org/) - Find local independent bookstores!
- [Bookshop](https://bookshop.org/)
- [Global Grey Ebooks](https://www.globalgreyebooks.com/)

See also:

- [Skyhold's list of Amazon alternatives](https://skyhold.org/noamazon/)
- [Jess Mahler's list of Amazon alternatives](https://jessmahler.com/where-to-buy-books-other-than-amazon/)

### Specific Titles

- [The Systems Bible (Systemantics 3rd Ed.)](https://www.generalsystemantics.com/product/the-systems-bible/) by John Gall
- [The Canterbury Tales](https://chaucer.fas.harvard.edu/pages/text-and-translations) in Middle English

## Games & Gaming

### Heroes of Might and Magic IV

- [maps4heroes.com](https://www.maps4heroes.com/heroes4/maps.php) - A huge collection of high-quality player-made maps. See also my own [map archive](https://github.com/benchristel/heroes-iv-map-archive).
- [heroesofmightandmagic.com](http://www.heroesofmightandmagic.com/heroes4/heroesofmightandmagic4iv.shtml) - The official website, with descriptions of every hero, creature, spell, artifact, and building.
- [Heroes Community Forums](http://heroescommunity.com)
- Ever wonder how many berserkers it takes to beat a phoenix? My [Creature Ratings](/heroes4/creature-ratings.md) page has got you covered.

### Other Computer Games

- [Zero-K](https://zero-k.info)
- [Age of Empires (fandom.com)](https://ageofempires.fandom.com) - Unit stats etc.

### Catalogs

- [ProtonDB](https://protondb.com/) - Find out if a game will run on Linux
- [SteamDB](https://steamdb.info/)

### 52-Card Games

A.K.A. the lost art of amusing yourself without electricity.

- [Card Game Rules at Pagat.com](https://www.pagat.com/) - A huge collection of game rules, maintained by John McLeod.

## Model Railroads

- [Burr Stewart (@muchfunwithtrains) on YouTube](https://www.youtube.com/@muchfunwithtrains/videos)
- [Layout Design Special Interest Group (LDSIG)](https://ldsig.org/)
  - [Design Primer](https://ldsig.net/o/ldsig/wiki/index_title_How_to_use_the_LDSIG_Design_Primer.html)
- [Gateway NMRA](https://www.gatewaynmra.org) of St. Louis
- [New Forest Model Railroad Society](http://www.nfmrs.org)

## Languages and Linguistics

### Conlangs <span inert>constructed languages</span>

- [Ardalambion](https://ardalambion.org) - Resources on J.R.R. Tolkien's elvish languages, by Helge Kåre Fauskanger.
- [Eldamo.org](https://eldamo.org) - the ELvish DAta MOdel. Paul Strack's project to collect every word of Elvish in Tolkien's works into one searchable, cross-referenced database.
- [A database of conlangs](https://database.conlang.org) on [Conlang.org](https://conlang.org/)
- [Dedalvs.com](https://dedalvs.com/) - David J. Peterson's site. You might have heard of his language [Dothraki](http://www.dothraki.com/).
- [The website of Jörg Rhiemeier](https://joerg-rhiemeier.de), creator of the Albic language family.
- [The Guild of Linguists Homepage](http://linguists.riedl.org/old/), with info about the D'ni language from the world of _Myst_ and _Riven_. (h/t [Richard Kennaway](http://www2.cmp.uea.ac.uk/~jrk/conlang.html))

### Cornish - Kernewek

- [English-Cornish Dictionary](https://cornishdictionary.org.uk/) - Gerlyver Kernewek
- [The Cornish Language Fellowship](https://cornish-language.org/) - Kowethas an Yeth Kernewek
- [GoCornish](https://gocornish.org/)
- [Radyo an Gernewegva](https://anradyo.com/) - Radio of the Cornish Language Community. See also [Pellwolok an Gernewegva](https://www.youtube.com/user/KernowPods) on YouTube.
- [Kernewegva.com](https://kernewegva.com/) - A website about Cornish, in Cornish.

### English & Multilingual Dictionaries

- [Etymonline](https://www.etymonline.com/) - An etymological dictionary of English.
- [Wiktionary](https://en.wiktionary.org/) - A collaborative multilingual dictionary. Extremely comprehensive.
- [Merriam-Webster](https://www.merriam-webster.com) - English dictionary and thesaurus.

### Linguistics

- [Leipzig Glossing Rules](https://www.eva.mpg.de/lingua/pdf/Glossing-Rules.pdf) - see also Wikipedia's [List of Glossing Abbreviations](https://en.wikipedia.org/wiki/List_of_glossing_abbreviations)

## Crafting

- [Open Stitch Dictionary](https://stitch.thefrugalgamer.net/index.php?title=Main_Page) - crochet, knitting, embroidery, and more!

### Knots and Ropework

h/t [Low Tech Magazine](https://solar.lowtechmagazine.com/2010/06/how-to-tie-the-world-together-online-knotting-reference-books/) for all of these.

- [Net Knots dot com](https://www.netknots.com) - descriptions of many knots, with animated instructions
- [The International Guild of Knot Tyers](https://igkt.net/)
- [_Knots, Ties, and Splices_ (1884)](http://www.archive.org/stream/cu31924014519940#page/n17/mode/thumb) by J. Tom Burgess.
- _Knots, Splices, and Rope Work: A Practical Treatise_ (1917) - sorry, broken link.
- [_The Use of Ropes and Tackle_ (1922)](https://archive.org/details/useofropestackle00danarich/useofropestackle00danarich/) by H. A. Dana and W. A. Pearl
- [_The Ashley Book of Knots_ (1944)](https://archive.org/details/TheAshleyBookOfKnots) by Clifford W. Ashley

## History of Technology

- [Folklore.org](https://folklore.org/0-index.html) - the history of the Apple Macintosh
- [Vintage Apple](https://vintageapple.org/) - the history of the early Macintosh, plus archives of magazines from the 80s and 90s (including Macworld and Byte).
- [Every default macOS (and OSX) wallpaper, in glorious 6K resolution](https://512pixels.net/projects/default-mac-wallpapers-in-5k/) courtesy of [512 Pixels](https://512pixels.net).
- [Version Museum](https://versionmuseum.com/) - Screenshots of old software

## Publicly Available Data

- [FAA Registry N-Number Search](https://registry.faa.gov/AircraftInquiry/Search/NNumberInquiry) - look up public data on aircraft by n-number (tail number).
- [Macrotrends](https://macrotrends.net) - economic and financial data over time

## Archives and Archiving Tools

- [Restorativland's Geocities Archive](https://geocities.restorativland.org/) - a resurrection of old websites
- [The Internet Archive](https://archive.org/) - A.K.A. the Wayback Machine.
- [archive.today](https://archive.today/) - A.K.A. [archive.is](https://archive.is/), [archive.ph](https://archive.ph/). Circumvents many paywalls.

## General Reference

- [Quote Investigator](https://quoteinvestigator.com)
- [arxiv.org](https://arxiv.org)
- [ResearchGate](https://www.researchgate.net/)
- [U.S. Bureau of Labor Statistics](https://data.bls.gov)
- [English Wikipedia](https://en.wikipedia.org) - see also [wikipedia.org](https://wikipedia.org)
- [English Wikiquote](https://en.wikiquote.org)
- [English Wiktionary](https://en.wiktionary.org)
- [Wikimedia](https://wikimedia.org)
- [Table Flipping Emoticons](https://emoticoncentral.com/category/table-flipping) `(ノಠ益ಠ)ノ彡┻━┻`

## Information Researchers

Dedicated individuals' comprehensive maps of their chosen domain.

- [Every Noise at Once](https://everynoise.com) - A catalog of all music on Spotify by algorithmically-inferred genre. An incredible work of data science by [Glenn McDonald](https://www.furia.com).
- [Eldamo.org](https://eldamo.org) - the ELvish DAta MOdel. Paul Strack's project to collect every word of Elvish in Tolkien's works
into one searchable, cross-referenced database.
- [David Rumsey Map Collection](https://www.davidrumsey.com/) - Historical and rare maps. (h/t [Cidoku])
- [Folklore and Mythology Electronic Texts](https://sites.pitt.edu/~dash/folktexts.html) collected by [D. L. Ashliman](https://sites.pitt.edu/~dash/ashliman.html). (h/t [Cidoku])

## Web Curators

- [varve's burrow](https://www.write-on.org/outbound.html) - useful programs and resources, plus the author's bookmarks
- [Terrible Lizard](https://terriblelizard.info/) - free and open access to journal articles; internet privacy; website building resources.
- [Public Domain Review](https://publicdomainreview.org/) - collections of public domain writing and art (h/t [Melon]).
- [Ruby Klover's website](https://www.bruh.ltd), which includes a [list of lists](https://www.bruh.ltd/lists) curated by the author.
- [Brandon's Journal](https://brandons-journal.com/links/) - includes a collection of blogs and websites about internet history, film, comics, pop culture, and Buddhism. There's also a [recipe book](https://scribbles.page/fj78s9ca#new_tab) compiled by the author's great-grandmother.
- [Mike Grindle](https://mikegrindle.com) - writing about retro technology and internet culture, plus a [links page](https://mikegrindle.com/blogroll) with a bunch of cool sites.
- [The Cidoku Network](https://cidoku.net/links/)
- [Website Review](https://websitereview.neocities.org/) - a virtual library of deepweb and www sites.
- [Melon's Fav Hyperlinks](https://melonking.net/melon?z=/links)
- [garlic.garden](https://garlic.garden/) by [allium house](https://allium.house/)
- [candle's website](https://kool.tools/) - a collection of tools focused on making tiny, minimalist games
- [Dan's Tools](https://www.danstools.com/) - a collection of simple browser-based utilities for web development and data conversion, plus a database of [user manuals](https://www.cleancss.com/user-manuals/) for physical products.
- [Bookmark Beat](https://bookmarkbeat.substack.com/) by [Dani Sandoval](https://dreamindani.com/) - Software development and UX design.
- [Interestings for Iterators](https://dwf.bigpencil.net/posts/) by [Davis W. Frank](https://dwf.bigpencil.net) - A collaborative repository of resources for software product development, consulting, and Extreme Programming.
- [Krazydad](https://krazydad.com) - Sudoku! Mazes! Printable Puzzles!
- [Richard Kennaway's List of Constructed Languages](http://www2.cmp.uea.ac.uk/~jrk/conlang.html)
- Mark Rosenfelder has compiled a [list of stories and novels that feature languages or linguistics](http://zompist.com/lang15.html) and a [list of websites about linguistics](http://zompist.com/lang17.html#Websites).
- [Ytoo!](https://ytoo.org) - Retro, indie search engines, social networks, memes, and browser-based games.
- [Curlie](https://curlie.org/) - A collaborative web directory with a search engine (h/t [Cidoku])
- [Ben Christel](https://benchristel.com) - this website. [Source code on GitHub](https://github.com/benchristelcom/benchristelcom.github.io/).

### Inspiration

- [Hypertext Gardens: Delightful Vistas](http://www.eastgate.com/garden/Enter.html) by Mark Bernstein. 1998.
- ["The Garden and the Stream: A Technopastoral"](https://hapgood.us/2015/10/17/the-garden-and-the-stream-a-technopastoral/) by Mike Caulfield. 2015.
- ["Curation is Creation"](https://camdez.com/blog/2016/03/30/curation-is-creation/) by Cameron Desautels. 2016. If you're decreasing local entropy, you're doing good work.
- ["How Blogs Broke the Web"](https://stackingthebricks.com/how-blogs-broke-the-web/) by Amy Hoy. Circa 2017.
- [Maggie Appleton on Digital Gardens](https://maggieappleton.com/garden-history). 2021.
- ["We Can Have a Different Web"](https://www.citationneeded.news/we-can-have-a-different-web/) by Molly White. 2024. A hopeful look at the web's problems.

## My Projects

- [_Process to Processes_](https://benchristel.github.io/process-to-processes) - A draft of my upcoming book about software development
- [Ben's Guide to Software Development](https://bensguide.substack.com) - A newsletter about the book
- [Bliki](https://github.com/benchristel/benchristel.github.io/wiki) - My personal blog/wiki about software, with 250+ topic-focused pages on everything from [abstraction](https://github.com/benchristel/benchristel.github.io/wiki/Abstraction) to [wholeness](https://github.com/benchristel/benchristel.github.io/wiki/Wholeness).
- [The Wayward Web](https://waywardweb.org) - A webring. A collaborative effort to map the useful, human parts of the web.
- [Druthers](https://druthers.app) - Instantly grok your group's priorities with ranked-choice voting. A collaboration with [Gavin Morgan](https://gavmor.com). 
- [Culture Machine](https://tv.benchristel.com/) - The app I wrote to break my YouTube addiction (it worked). Emotionally-stabilizing videos played continuously in an unskippable random sequence.
- [mdsite](https://benchristel.github.io/mdsite) - A modern generator for old-school static sites. It turns any tree of [Markdown] files into a website, complete with auto-generated navigation links. It's also the tool I used to create this webpage!
- [Taste](https://npmjs.com/package/@benchristel/taste) - Simple, speedy JavaScript test framework
- [yt](https://benchristel.github.io/yt/) - Watch YouTube without ads or tracking. Pairs great with [LeechBlock](https://www.proginosko.com/leechblock/).
- [hypersearch](https://www.npmjs.com/package/@benchristel/hypersearch) - Powers the searchbar on this page!
- [Bastion](https://bastionhome.github.io/) - A big directory of links. The predecessor of this page.
- [The Cave](https://benchristel.github.io/the-cave/) - Helps you keep track of short-term tasks with deep dependencies.
- [Auracle](https://benchristel.github.io/auracle) - A word generator for conlangs. Give it some examples of your desired aesthetic, and get more in return.
- [Audition](https://github.com/benchristel/audition) - A command-line tool that keeps the prose description of your conlang up to date with its morphology and lexicon.
- [The One Grammar to Rule Them All](/conlangs/ogtrta) (OGTRTA) - The Lisp of conlangs. A syntax template for people who don't want to think about syntax anymore.
- [wwwebring](https://www.npmjs.com/package/wwwebring) - A fully clientside webring widget for static sites. Powers [the Wayward Web](https://waywardweb.org).
- [LynX](https://github.com/benchristel/LynX) - My Linux Mint theme. Re-skins Linux to look and feel like "big cat"-era Mac OSX. Don't ask me how it's pronounced.
- [autokeyconf](https://github.com/benchristel/autokeyconf) - Rebinds shortcut keys system-wide on Linux.
- ["Frost" theme for Docky](https://github.com/benchristel/docky-frost) - An OSX-style dock for Linux.

## Webring<hs-meta keywords="ring wayward"></hs-meta>

<script defer src="https://cdn.jsdelivr.net/npm/wwwebring@0.2.0"></script>
<p
  class="webring-container"
  data-wwwebring="https://waywardweb.org/ring.json"
  data-wwwebring-theme="default"
  data-wwwebring-you-are-here="https://ben.waywardweb.org"
></p>

## Settings

- <label><input type="checkbox" id="autofocus-checkbox" /> Automatically focus the search field on page load.</label>

<div class="space-32"></div>

<p class="centered-text">There are <noscript>approximately 329</noscript><span id="number-of-links"></span> external links on this page.</p>

<div data-hypersearch-end></div>
</main>

<!--
====================================
HREFS BELOW
====================================
-->

[Cidoku]: https://cidoku.net/links/
[C Jackdaw]: https://skyhold.org/
[Maya]: https://maya.land/
[Markdown]: https://daringfireball.net/projects/markdown/
[Melon]: https://melonking.net/
[Seirdy]: https://seirdy.one/

<script defer type="module" src="https://cdn.jsdelivr.net/npm/@benchristel/hypersearch@0.5.1"></script>
<script>
const elById = document.getElementById.bind(document)
const searchInput = document.querySelector("input[type=search]")
const autofocusCheckbox = elById("autofocus-checkbox")
if (localStorage.autofocusSearch === "true") {
  searchInput.focus()
  autofocusCheckbox.checked = true
}

autofocusCheckbox.addEventListener("change", () => {
  localStorage.autofocusSearch = autofocusCheckbox.checked
})

searchInput.addEventListener("keypress", (e) => {
  setTimeout(() => {
    if (searchInput.value.startsWith("!")) {
      searchInput.setAttribute("list", "search-shortcuts")
    } else {
      searchInput.setAttribute("list", "")
    }
  }, 0)

  if (e.key === "Enter") {
    const shortcutUrl = shortcuts[searchInput.value]
    if (shortcutUrl) {
      window.location = shortcutUrl
    } else {
      const firstLinkHref = firstVisibleHypersearchLink()?.href
      if (!firstLinkHref || searchInput.value.includes("!")) {
        search("ddg", searchInput.value)
      } else {
        window.location = firstLinkHref
      }
    }
  }
})

function firstVisibleHypersearchLink() {
  for (const link of document.querySelectorAll("[data-hypersearch-start] ~ :not([data-hypersearch-end] ~ *) a[href]")) {
    if (link.checkVisibility()) return link
  }
  return null
}

const shortcuts = {
  "tv": "https://tv.benchristel.com/",
  "zen": "https://benchristel.github.io/meditation/",
  "bliki": "https://github.com/benchristel/benchristel.github.io/wiki",
  "yt": "https://benchristel.github.io/yt/",
  "mail": "https://mail.google.com/",
  "edit": "https://github.com/benchristelcom/benchristelcom.github.io/edit/main/src/portal/index.md",
}

function search(providerId, query) {
  const url = document.getElementById(providerId).getAttribute("data-search")
  window.location = url.replace("%s", encodeURIComponent(query))
}

for (let button of document.querySelectorAll("[data-search]")) {
  button.addEventListener("click", () => search(button.id, searchInput.value))
}

const numLinks = new Set([...document.querySelectorAll("a[href^='http']")].map(a => a.href)).size
document.getElementById("number-of-links").innerText = numLinks
</script>
</div>
</body>
</html>
