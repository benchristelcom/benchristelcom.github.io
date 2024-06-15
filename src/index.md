# Ben Christel&rsquo;s Website

<div id="tree"></div>

<input data-hypersearch type="search" placeholder="Search" style="display: block; max-width: 300px; margin-inline: auto;"/>

<div data-hypersearch-start></div>

## Projects

### Usable

- [The Wayward Web](https://waywardweb.org) - A webring. A collaborative effort to map the useful, human parts of the web.
- [Druthers](https://druthers.app) - Instantly grok your group's priorities with ranked-choice voting. A collaboration with [Gavin Morgan](https://gavmor.com). 
- [Culture Machine](https://benchristel.github.io/tv) - The app I wrote to break my YouTube addiction (it worked). Emotionally-stabilizing videos played continuously in an unskippable random sequence.
- [mdsite](https://benchristel.github.io/mdsite) - A modern generator for old-school static sites. It turns any tree of Markdown files into a website, complete with auto-generated navigation links. It's also the tool I used to create this webpage!
- [Taste](https://npmjs.com/package/@benchristel/taste) - Simple, speedy JavaScript test framework
- [yt](https://benchristel.github.io/yt/) - Watch YouTube without ads or tracking. Pairs great with [LeechBlock](https://www.proginosko.com/leechblock/).

### Niche

- [Audition](https://github.com/benchristel/audition) - A command-line tool that keeps the prose description of your conlang up to date with its morphology and lexicon.
- [The One Grammar to Rule Them All](https://github.com/benchristel/OGTRTA) - The Lisp of conlangs. A syntax template for people who don't want to think about syntax anymore.
- [wwwebring](https://www.npmjs.com/package/wwwebring) - A fully clientside webring widget for static sites. Powers [the Wayward Web](https://waywardweb.org).
- [LynX](https://github.com/benchristel/LynX) - My Linux "distro." Re-skins Linux Mint to look and feel like vintage Mac OSX.
- [autokeyconf](https://github.com/benchristel/autokeyconf) - Rebinds shortcut keys system-wide on Linux.
- ["Frost" theme for Docky](https://github.com/benchristel/docky-frost) - An OSX-style dock for Linux.

### Writing

- [_Process to Processes_](https://benchristel.github.io/process-to-processes) - A draft of my upcoming book about software development
- [Ben's Guide to Software Development](https://bensguide.substack.com) - A newsletter about the book
- [Bliki](https://github.com/benchristel/benchristel.github.io/wiki) - My personal blog/wiki about software, with 250+ topic-focused pages on everything from [abstraction](https://github.com/benchristel/benchristel.github.io/wiki/Abstraction) to [wholeness](https://github.com/benchristel/benchristel.github.io/wiki/Wholeness).

## List of Lists of Links

- [Recipes](https://benchristel.github.io/recipes)
- Music
- Communication and Social Networks
- [Software Development](software.html)
- Life De-FAANGed
- Languages and Linguistics
- J.R.R. Tolkien
- Alexandrian Architecture and Philosophy
- [Heroes of Might and Magic IV](heroes4) - Maps and documentation for the classic computer strategy game.
- [History of Technology](techhist.html)
- [Web Archives and Archiving Tools](archiving.html)

<div data-hypersearch-end></div>

## Webring

<script defer src="https://cdn.jsdelivr.net/npm/wwwebring@0.1.0"></script>
<div
  class="webring-container"
  data-wwwebring="https://waywardweb.org/ring.json"
  data-wwwebring-theme="default"
  data-wwwebring-you-are-here="https://ben.waywardweb.org"
></div>

## Settings

- <label><input type="checkbox" id="autofocus-checkbox" /> Automatically focus the search field on page load.</label>

<script defer type="module" src="https://cdn.jsdelivr.net/npm/@benchristel/hypersearch@0.1.0"></script>
<script>
const searchInput = document.querySelector("input[type=search]")
const autofocusCheckbox = document.getElementById("autofocus-checkbox")
if (localStorage.autofocusSearch === "true") {
  searchInput.focus()
  autofocusCheckbox.checked = true
}

autofocusCheckbox.addEventListener("change", () => {
  localStorage.autofocusSearch = autofocusCheckbox.checked
})
</script>

<style>
.home-link {
  display: none;
}

h1 {
  border-bottom: none;
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

#tree {
  width: 200px;
  height: 200px;
  margin: 1em auto 3em;
  background-image: url('tree-resized.jpg');
  background-position: 2px -20px;
  background-color: #fec;
  background-blend-mode: multiply;
  border: 2px solid #0004;
  border-radius: 999px;
}

</style>