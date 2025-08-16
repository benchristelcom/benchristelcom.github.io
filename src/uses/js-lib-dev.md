# Tools I Use for JavaScript Library Development

## Next

These are the tools and libraries I'm planning to use for my next JavaScript
project.

- [TypeScript] as the source language
  - **Why?** It's ubiquitous and expressive.
  - I'm not thrilled about its level of soundness compared to Flow,
    but it's not too bad if you never mutate objects and you parse JSON inputs
    strictly (discarding unrecognized object fields).
  - tsconfig.json settings include:
    - `strict` obviously
    - `isolatedDeclarations` - for compatibility with [JSR].
    - `noUncheckedIndexedAccess`
- [Node.js] v24 as the JS runtime
  - **Why?** It can run TypeScript without a separate compilation step. Node is the
    most popular runtime and the best supported by libraries etc.
  - v24 is the latest supported version. 23 is end-of-life. 22 is the latest
    long-term support release, but it can't run TypeScript.
- [nvm] as the Node version manager
  - **Why?** It's easy to install, and, more importantly, easy to uninstall.
    By using a version manager, I can have multiple Node versions installed and
    easily switch between them.
- [pnpm] as the package manager
  - I'm not too sure about this one. pnpm is fast and has some nice features,
    but I've also seen bugs like `--frozen-lockfile` continuing to install
    packages when the lockfile and package.json don't match.
- [make] as the task runner
  - **Why?** It's installed just about everywhere, and it's package-manager
    agnostic. No need to remember whether it's `pnpm mytask` or `yarn mytask`
    or whatever else. If I want to switch package managers (see above) it's
    pretty easy to do if I have `make` shims for everything.
- [@benchristel/taste] as the test framework
  - **Why?** It's fast, has all the features I need, and has none that I don't.
    And if I don't like something about it, I can change it.
  - I really do need to productize a runner for it, though, and move some of its
    functions to their own packages. I find myself reaching for Taste for all
    kinds of non-test stuff, and it gets into my production builds, which feels
    weird.
- [typescript-formatter] as the formatter
  - Why? Some alternatives:
    - [Prettier]'s algorithm, which both wraps long lines and unwraps short
      ones, [often creates bizarre and inconsistent formatting][why-not-prettier]. Prettier would be my favorite formatter if it would only treat 80 columns
      as a _maximum_ and respect my manually-inserted line breaks.
    - [Biome] is essentially the same as Prettier.
    - [@stylistic/eslint-plugin] requires a lot of configuration and doesn't
      seem to fully understand TypeScript syntax. E.g. it can't decide whether
      object type literals are blocks or objects.
    - [typescript-formatter] seems to format things basically the same as my
      ESLint configuration. It even understands JSX! It's also much faster than
      ESLint. I think all this goodness comes from the fact that it uses
      TypeScript's own parser (as a peer dependency) rather than reinventing
      the wheel.
- [tstyche] for typetesting
  - Why? It's much faster than [tsd]. It has a watch mode. It has nice error
    formatting.
- [husky] as the git hooks framework
  - Why? I want to run `make lint` as a pre-commit hook. I hate having
    formatting-only commits cluttering up my git history. Enforcing a
    pre-commit hook in the repo itself ensures I'll never commit badly
    formatted code.
- [knip] to remove unused code.
- [bumpp] to do releases
  - Why? It's simple and does what I need. [Changesets] is an alternative I've
    used, but it's designed for large teams that release infrequently.
    I don't want to have to write a changeset file for every commit — I'd rather
    read through the Git log and diff before releasing.

## Wanted

- Documentation generator. Ideally, I'd like to use a "literate programming
  lite" style where I can write [JSDoc] comments and have a website generated
  automatically from that.
  - [true-myth] [uses][1] [typedoc] for this purpose.
  - [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org/) looks promising for integrating with vitepress, docusaurus, or mdsite.
- Performance testing tools.

[1]: https://github.com/true-myth/true-myth/blob/main/package.json
[knip]: https://knip.dev/
[true-myth]: https://true-myth.js.org/
[TypeScript]: https://www.typescriptlang.org/
[typedoc]: https://typedoc.org/
[Node.js]: https://nodejs.org/
[nvm]: https://github.com/nvm-sh/nvm
[pnpm]: https://pnpm.io/
[make]: https://www.gnu.org/software/make/manual/html_node/index.html
[@benchristel/taste]: https://www.npmjs.com/package/@benchristel/taste
[typescript-formatter]: https://www.npmjs.com/package/typescript-formatter
[Prettier]: https://www.npmjs.com/package/prettier
[why-not-prettier]: https://antfu.me/posts/why-not-prettier
[Biome]: https://biomejs.dev/
[@stylistic/eslint-plugin]: https://eslint.style/
[tstyche]: https://tstyche.org/
[tsd]: https://www.npmjs.com/package/tsd
[husky]: https://typicode.github.io/husky/
[bumpp]: https://www.npmjs.com/package/bumpp
[Changesets]: https://www.npmjs.com/package/@changesets/cli
[JSDoc]: https://jsdoc.app/
[JSR]: https://jsr.io/
