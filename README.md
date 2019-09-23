# @team-lab/eslint-config

This is [teamLab](https://team-lab.com)'s standard ESLint configuration.

これは[teamLab](https://team-lab.com)の標準ESLint設定です。

各プロジェクトではこの設定をベースにESLintルールを設定してください。

## セットアップ

### Vanilla

#### 依存パッケージ

```sh
yarn add -D eslint @team-lab/eslint-config eslint-plugin-import
# or
npm i -D eslint @team-lab/eslint-config eslint-plugin-import
```

#### .eslintrc

```yml
extends:
  - '@team-lab'
```

### TypeScript

`@typescript-eslint`の対応バージョンは`v1.13.0`です。

#### 依存パッケージ

```sh
yarn add -D \
  eslint @team-lab/eslint-config eslint-plugin-import \
  @typescript-eslint/parser@^1.13.0 @typescript-eslint/eslint-plugin@^1.13.0 \
  eslint-config-typescript typescript
# or
npm i -D \
  eslint @team-lab/eslint-config eslint-plugin-import \
  @typescript-eslint/parser@^1.13.0 @typescript-eslint/eslint-plugin@^1.13.0 \
  eslint-config-typescript typescript
```

#### .eslintrc

```yml
parserOptions:
  project: ./tsconfig.json # tsconfig.json path here
extends:
  - '@team-lab/eslint-config/typescript'
```
