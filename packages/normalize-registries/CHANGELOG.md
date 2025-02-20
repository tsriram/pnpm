# @pnpm/normalize-registries

## 2.0.8

### Patch Changes

- 46aaf7108: Revert the change that was made in pnpm v6.23.2 causing a regression describe in [#4052](https://github.com/pnpm/pnpm/issues/4052).

## 2.0.7

### Patch Changes

- a7ff2d5ce: When normalizing registry URLs, a trailing slash should only be added if the registry URL has no path.

  So `https://registry.npmjs.org` is changed to `https://registry.npmjs.org/` but `https://npm.pkg.github.com/owner` is unchanged.

  Related issue: [#4034](https://github.com/pnpm/pnpm/issues/4034).

## 2.0.6

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0

## 2.0.5

### Patch Changes

- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0

## 2.0.4

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0

## 2.0.3

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0

## 2.0.2

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0

## 2.0.1

### Patch Changes

- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0

## 2.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [97b986fbc]
  - @pnpm/types@7.0.0

## 1.0.6

### Patch Changes

- Updated dependencies [9ad8c27bf]
  - @pnpm/types@6.4.0

## 1.0.5

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1

## 1.0.4

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0

## 1.0.3

### Patch Changes

- Updated dependencies [db17f6f7b]
  - @pnpm/types@6.2.0

## 1.0.2

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0

## 1.0.1

### Patch Changes

- Updated dependencies [da091c711]
  - @pnpm/types@6.0.0

## 1.0.1-alpha.0

### Patch Changes

- Updated dependencies [da091c71]
  - @pnpm/types@6.0.0-alpha.0
