import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'indent': ['error', 2], // Enforce 2-space indentation
      'object-curly-spacing': ['error', 'never'], // Enforce spacing inside import/export braces
      'eol-last': ['error', 'always'], // Enforce newline at the end of files
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }], // Disallow multiple empty lines
      '@typescript-eslint/explicit-function-return-type': ['error'], // Require explicit return types on functions and class methods
    },
  },
)
