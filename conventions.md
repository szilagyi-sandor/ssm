# Rules

- architecture is based on features - `"what is used together must coexist together"`
- it is forbidden to use a directory based on file type (components, adapters, models, ...)
- reusable code goes in the shared directory (common utilities, common hooks, ...)
- only add folders when necessary, try to keep the structure flat

- create small and predictable functions
- favour immutability (ex. use map, filter and reduce) when convenient
- use Immer when updating deep objects if immutable approach is hard to read/write

- use types over interfaces where possible and convenient

- use PascalCase for components. Ex. `Component.tsx`
- use camelCase for folders, ts files , media files, styles

- avoid using default exports
- use index files for simpler imports

- components are classic (non-arrow) functions
- use arrow functions for simple functions when convenient

- use domain.ts files in folders

- use import aliases, when convenient and it is not coming from the same alias
