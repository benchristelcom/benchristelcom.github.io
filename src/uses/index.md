# Tools I use

## Hardware and OS

- [13-inch Framework laptop](https://frame.work/)
  - 11th Gen Intel© Core™ i5-1135G7 @ 2.40GHz × 4
  - 1TB SSD
  - 32GB RAM (probably more than I need)
- [Linux Mint 20.3](https://www.linuxmint.com/)
  - Cinnamon desktop
  - [LynX theme](https://github.com/benchristel/LynX)
  - [macOS keybindings](https://github.com/benchristel/autokeyconf)
- [WASD 87-key keyboard](https://www.wasdkeyboards.com/) with [Cherry MX brown switches](https://www.wasdkeyboards.com/mechanical-keyboard-guide) and Mac keycaps

## Web browser

- [Firefox](https://www.mozilla.org/en-US/firefox/new/)
  - [New Tab Override extension](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/) so I can set [the Web Portal](/portal) as my homepage.
  - [Color scheme](https://color.firefox.com/?theme=XQAAAAL6AAAAAAAAAABBKYhm849SCia2CaaEGccwS-xMDPsqu1p-XAF6EJDWcx9sS_Bi3JZH4KPzK-C2nG0G0z0EYOEN1uOojKq8xIkzQd7r6Lb_q5Whn0OXxiivqrZyadZXRncNouH8dON5uAlcixY_JS1naRZJs1_TXnHJS3Bp2orX6rzkWXrN_6M5wiHYKpJL5lHhwHuprDS2eb____dfIEA) (h/t [Mark Sandstrom](https://github.com/dnerdy)) - I have no idea why they made the default theme so low-contrast.

## Computer habitability

- [uBlock Origin for Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Wide-spectrum ad, tracker, and content blocker.
  - [for Chrome](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
  - [for Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
- [LeechBlock NG for Firefox](https://www.proginosko.com/leechblock/) - Highly configurable site-blocker. Lets you set time limits and redirects. [My configuration](/leechblock.txt).
  - [for Chrome](https://chromewebstore.google.com/detail/leechblock-ng/blaaajhemilngeeffpbfkdjjoefldkok)
  - [for Edge](https://microsoftedge.microsoft.com/addons/detail/leechblock-ng/hnncfhodpmpjchmmcnimoimkcojdmfhl)

## Software development

- [JetBrains editors](https://www.jetbrains.com/) - Expensive, but they come with pretty incredible code intelligence and refactoring tools. Lots of stuff you'd have to configure yourself or use plugins for in other editors "just works" in JetBrains.
- [Visual Studio Code](https://code.visualstudio.com/) - Pretty good out of the box, configurable, versatile, and free.
  - [emeraldwalk.RunOnSave extension](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) - Runs a program each time a file is saved. I use it to build the development version of this website.

### Web Hosting

- [Namecheap](https://namecheap.com/) - Domain registrar
- [GitHub Pages](https://pages.github.com/) - Mostly painless hosting for static sites. Works well with Git, obviously. But it was bizarrely difficult to set up a custom domain; the process is riddled with errors and footguns.
- [Neocities](https://neocities.org) - Freemium, indie, social web hosting. A spiritual successor to Geocities. Much easier to add a custom domain to than GitHub Pages. Neocities hosts [The Wayward Webring](https://waywardweb.org) and a [mirror of this site](https://benchristel.neocities.org).

### My go-to JavaScript tools and libraries

- [TypeScript](https://typescriptlang.org/) - Statically-typed superset of JavaScript. Owned by Microsoft.
- [Vite](https://vitejs.dev/) - Fast, easy-to-use dev server for single-page apps. Built-in hot-reloading and TypeScript compilation, among other features.
- [@benchristel/taste](https://www.npmjs.com/package/@benchristel/taste) - Fast, ergonomic, minimalist test framework.
- [Bun](https://bun.sh/) - blazing fast, but somewhat crash-prone replacement for node and npm that also implements some web APIs (but no DOM). I use Bun to run [mdsite](https://benchristel.github.io/mdsite) and [Taste](https://www.npmjs.com/package/@benchristel/taste) tests.
- [Prettier](https://prettier.io) - On many of my older projects, I use Prettier for code formatting.
- [ESLint](https://eslint.org/) - On my more recent projects, I've been formatting code with ESLint and the [@stylistic](https://eslint.style/) plugin. It's more flexible than Prettier. [Here is an example of how I've configured it](https://github.com/benchristel/marss/blob/7048cda9e38fcc26578b92d07b73eb0eb3966f5a/eslint.config.js). For the reasons why I switched, see [Anthony Fu's post "Why I don't use Prettier"](https://antfu.me/posts/why-not-prettier).
- [mdsite](https://benchristel.github.io/mdsite) - My static site generator.
- [Preact](https://preactjs.com/) - Lightweight reactive UI library. Implements the React API, so you can use third-party React components.
- [Husky](https://typicode.github.io/husky/) - Git hooks framework.
- [Marked](https://marked.js.org/) - Markdown-to-HTML converter for NodeJS.
- [@regosen/gapless-5](https://www.npmjs.com/package/@regosen/gapless-5) - gapless and looped audio playback on the web. Essential if you're building a music player.
- [tiny-invariant](https://www.npmjs.com/package/tiny-invariant) - TypeScript assertion library that does type narrowing.