<style>
span[inert] { position: absolute; width: 1px; height: 1px; overflow: hidden; }
</style>

# Tools I use

<input data-hypersearch type="search" placeholder="Search this page">
<script defer type="module" src="https://cdn.jsdelivr.net/npm/@benchristel/hypersearch@0.5.1"></script>
<style>
.hypersearch-no-results {display: none;}
.hypersearch-no-results-shown {display: block;}
</style>
<p class="hypersearch-no-results">No results.</p>

## Computer Hardware and OS <span inert>operating system</span>

- [13-inch Framework laptop](https://frame.work/)
  - 11th Gen Intel© Core™ i5-1135G7 @ 2.40GHz × 4
  - 1TB SSD
  - 32GB RAM (probably more than I need)
- [Linux Mint 20.3](https://www.linuxmint.com/)
  - Cinnamon desktop
  - [LynX theme](https://github.com/benchristel/LynX)
  - [macOS keybindings](https://github.com/benchristel/autokeyconf)
- [WASD 87-key keyboard](https://www.wasdkeyboards.com/) with [Cherry MX brown switches](https://www.wasdkeyboards.com/mechanical-keyboard-guide) and Mac keycaps

## Phone

- Feature phone (a.k.a. dumbphone, flip phone). Can't recommend the one I currently have, so no link. If you want to make the switch, avoid KaiOS. It's absolutely riddled with bugs and performance issues.

## Web browser

- [Firefox](https://www.mozilla.org/en-US/firefox/new/) by [Mozilla](https://mozilla.org/)
  - [New Tab Override extension](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) so I can set [the Web Portal](/portal) as my homepage.
  - [Color scheme](https://color.firefox.com/?theme=XQAAAAL6AAAAAAAAAABBKYhm849SCia2CaaEGccwS-xMDPsqu1p-XAF6EJDWcx9sS_Bi3JZH4KPzK-C2nG0G0z0EYOEN1uOojKq8xIkzQd7r6Lb_q5Whn0OXxiivqrZyadZXRncNouH8dON5uAlcixY_JS1naRZJs1_TXnHJS3Bp2orX6rzkWXrN_6M5wiHYKpJL5lHhwHuprDS2eb____dfIEA) (h/t [Mark Sandstrom](https://github.com/dnerdy)) - I have no idea why they made the default theme so low-contrast.

## Computer habitability

- [uBlock Origin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Wide-spectrum ad, tracker, and content blocker.
  - [for Chrome](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
  - [for Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
- [LeechBlock NG for Firefox](https://www.proginosko.com/leechblock/) - Highly configurable site-blocker. Lets you set time limits and redirects. [My configuration](/leechblock.txt).
  - [for Chrome](https://chromewebstore.google.com/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok)
  - [for Edge](https://microsoftedge.microsoft.com/addons/detail/leechblock-ng/hnncfhodpmpjchmmcnimoimkcojdmfhl)

## Desktop Apps

- [Obsidian](https://obsidian.md) - Notetaking / digital gardening app for iOS, Android, Windows, macOS, and Linux.

## Software development

- [JetBrains editors](https://www.jetbrains.com/) - Expensive, but they come with pretty incredible code intelligence and refactoring tools. Lots of stuff you'd have to configure yourself or use plugins for in other editors "just works" in JetBrains.
- [Visual Studio Code](https://code.visualstudio.com/) - Pretty good out of the box, configurable, versatile, and free.
  - [emeraldwalk.RunOnSave extension](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) - Runs a program each time a file is saved. I use it to build the development version of this website.
- [GitHub](https://github.com) - Hosts Git repositories. Owned by Microsoft.
- [GitLab](https://gitlab.com) - Hosts Git repositories.

### Web Hosting

- [Namecheap](https://namecheap.com/) - Domain registrar
- [GitHub Pages](https://pages.github.com/) - Mostly painless hosting for static sites. Works well with Git, obviously. But it was bizarrely difficult to set up a custom domain; the process is riddled with errors and footguns.
- [Neocities](https://neocities.org) - Freemium, indie, social web hosting. A spiritual successor to Geocities. Much easier to add a custom domain to than GitHub Pages. Neocities hosts [The Wayward Webring](https://waywardweb.org) and a [mirror of this site](https://benchristel.neocities.org).

### Programming Languages

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - [NPM](https://npmjs.com) - Package repository. Owned by Microsoft. See also the [NPM documentation](https://docs.npmjs.com).
- [TypeScript](https://typescriptlang.org/) - Statically-typed superset of JavaScript. Owned by Microsoft.
- [Ruby](https://www.ruby-lang.org/en/)
  - [Rubygems](https://rubygems.org/) - Package repository.
- [Go](https://go.dev/)

### My go-to JavaScript tools and libraries

- [Bundlephobia](https://bundlephobia.com) - Website where you can view the size and composition of NodeJS / JavaScript packages on NPM. Includes comparisons to similar libraries. Useful for keeping your JS bundles small.
- [deps.dev](https://deps.dev/) - Research your dependencies. Find licenses, transitive dependencies, and security alerts.
- [Vite](https://vitejs.dev/) - Fast, easy-to-use dev server for single-page apps. Built-in hot-reloading and TypeScript compilation, among other features.
- [@benchristel/taste](https://www.npmjs.com/package/@benchristel/taste) - Fast, ergonomic, minimalist test framework.
- [Bun](https://bun.sh/) - blazing fast, but somewhat crash-prone replacement for node and npm that also implements some web APIs (but no DOM). I use Bun to run [mdsite](https://benchristel.github.io/mdsite) and [Taste](https://www.npmjs.com/package/@benchristel/taste) tests.
- [pnpm](https://pnpm.io/) - Replaces `npm`.
- [Prettier](https://prettier.io) - On many of my older projects, I use Prettier for code formatting.
- [ESLint](https://eslint.org/) - On my more recent projects, I've been formatting code with ESLint and the [@stylistic](https://eslint.style/) plugin. It's more flexible than Prettier. [Here is an example of how I've configured it](https://github.com/benchristel/marss/blob/7048cda9e38fcc26578b92d07b73eb0eb3966f5a/eslint.config.js). For the reasons why I switched, see [Anthony Fu's post "Why I don't use Prettier"](https://antfu.me/posts/why-not-prettier).
- [mdsite](https://benchristel.github.io/mdsite) - My static site generator.
- [Preact](https://preactjs.com/) - Lightweight reactive UI library. Implements the React API, so you can use third-party React components.
- [Husky](https://typicode.github.io/husky/) - Git hooks framework.
- [Marked](https://marked.js.org/) - Markdown-to-HTML converter for NodeJS.
- [@regosen/gapless-5](https://www.npmjs.com/package/@regosen/gapless-5) - gapless and looped audio playback on the web. Essential if you're building a music player.
- [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) - TypeScript assertion library that does type narrowing.

## Tools I'm Interested In

I don't currently use these, but I might someday.

### Apps

- [Taskwarrior](https://taskwarrior.org) - Manages todo lists from the command line.
- [The Old Reader](https://theoldreader.com/) - An RSS feed reader modeled after the now-defunct Google Reader.
- [Surfraw](http://surfraw.org/) - Browses the web from the command line. Apparently you can customize it via
  plugin-like things called [elvi](https://baccyflap.com/res/sr/).

### Software Development

- [Storytime](https://storytime.team/) - backlog management tool for Extreme Programming teams. In closed beta as of July 2025.
- [VSCodium](https://vscodium.com/) - libre, telemetry-free build of VSCode
- [Deno](https://deno.com/) - see also the [documentation](https://docs.deno.com/)
- [Neutralino](https://neutralino.js.org/) - Build lightweight cross-platform desktop apps with HTML, JavaScript, and CSS.
- [daisyUI](https://daisyui.com/)
- [SQLite](https://sqlite.org/)
- [Natural](https://naturalnode.github.io/natural/) - Natural language processing (NLP) library for NodeJS
- [Fly.io](https://fly.io) - web server hosting
- [Gource](https://gource.io/) - visualize Git repo history as an animated graph
- [Milkdown](https://milkdown.dev/) - a framework for WYSIWYG/markdown combo editors. Write markdown that converts to rich text as you type. Made by [Mirone](https://mirone.me/).
- [MDX](https://mdxjs.com/) - A cross between [Markdown] and JSX. Lets you add React components to Markdown documents and render those documents in a React app.
- [day.js](https://day.js.org/) - a JavaScript library for date/time calculations.
- [date-fns](https://date-fns.org/) - another JavaScript library for date/time calculations.
- [superstruct](https://docs.superstructjs.org/) - A TypeScript parser combinator library.
- [Datomic](https://www.datomic.com/) - Distributed append-only database.
- [Nix](https://nixos.org/nix)

## Tools I Have Used and Liked

I like these, and they're still available, but for one reason or another I don't use them anymore.

- [Flow](https://flow.org/) - A type system for JavaScript, similar to [TypeScript](https://typescriptlang.org/). Flow is, IMO, the superior typechecker in several respects, including correctness and performance, but unfortunately few libraries distribute type declarations for it.
- [Goatcounter](https://www.goatcounter.com) - Free web analytics that won't let Big Tech spy on your users. Stopped using because I don't get enough traffic to care about analytics.
- [Pale Moon](https://palemoon.org) - a fork of the Firefox browser, free of bloatware and adware, but with support for many modern web APIs. (And yes, their website circa 2024 _was_ the ultimate inspiration for the design of the [portal page](/portal)!) I switched back to Firefox because I wanted to install extensions that wouldn't work with Pale Moon.
