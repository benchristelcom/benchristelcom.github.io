# Yarn (NodeJS Package Manager)

[Yarn (Official Website)](https://yarnpkg.com/)

## Globally install a package you're developing

(July 2024, Yarn 1.22.15)

```bash
cd the-package-repo
yarn global add "file:$PWD"
```

Source: [Stack Overflow](https://stackoverflow.com/questions/70566220/how-to-use-yarn-to-install-a-local-package-globally)

WARNING: if you accidentally run the above commands in a directory that is not an NPM
package (no package.json), you may see errors like the following on subsequent runs of `yarn global`:

```
error Package "/home/ben/workspace" refers to a non-existing file '"/home/ben/workspace@file:../../../workspace@file:/home/ben/workspace/ben"'.
```

and `yarn global` won't be able to do anything.

When I ran into this, the solution was to edit `.config/yarn/global/package.json` and remove the `/home/ben/workspace` package listing.

