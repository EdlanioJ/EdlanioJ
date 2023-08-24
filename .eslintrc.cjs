// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import("eslint").Linter.Config} */
const config = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
      },
    },
  ],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  extends: ['next/core-web-vitals', '@rocketseat/eslint-config/next'],
  rules: {},
}

module.exports = config
