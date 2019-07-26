# eslint-config-teamlab

This is [teamLab](https://teamlab.art)'s standard ESLint configuration.

これは[teamLab](https://teamlab.art)の標準ESLint設定です。

各プロジェクトではこの設定をベースにESLintルールを設定してください。

## セットアップ

### Vanilla

#### 依存パッケージ

```sh
yarn add -D eslint eslint-config-teamlab eslint-plugin-import
# or
npm i -D eslint eslint-config-teamlab eslint-plugin-import
```

#### .eslintrc

```yml
---
extends:
  - teamlab
```

### TypeScript

#### 依存パッケージ

```sh
yarn add -D \
  eslint eslint-config-teamlab eslint-plugin-import \
  @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-typescript
# or
npm i -D \
  eslint eslint-config-teamlab eslint-plugin-import \
  @typescript-eslint/parser @typescript-eslint/eslint-plugin \
  eslint-config-typescript typescript
```

#### .eslintrc

```yml
---
extends:
  - teamlab/typescript
```
