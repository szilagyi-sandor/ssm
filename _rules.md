# Rules

## Version 0.2.1

- architecture is based on features - `"what is used together must coexist together"`
- it is forbidden to use a directory based on file type (components, adapters, models, ...)
- reusable code goes in the shared directory (common utilities, common hooks, ...)
- features should not import from other features

- only add folders when necessary, try to keep the structure flat

- avoid using default exports
- use import aliases when convenient and it is not coming from the same alias
- use index files for simpler imports
- import order is: react/vite/vitest, libraries, aliases (@), relative imports, js, styles, images

- create small and predictable functions
- favour immutability (ex. use map, filter and reduce) when convenient
- use Immer when updating deep objects if immutable approach is hard to read/write

- use types over interfaces where possible and convenient

- use PascalCase for components. Ex. `Component.tsx`
- use camelCase for folders, ts files , media files, styles, fonts

- use normal (non-arrow) functions for components
- use arrow functions when convenient

- use domain.ts files in folders

- use rem and em css units when convenient

- add comments if it's justified
- comments start with small letters, even if it consists of sentences

## Steps 0.2.2

- check index.js files []
- check imports []
