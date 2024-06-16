module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-var': 'warn',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'warn',
    'react/no-unused-state': 'warn',
    'react/jsx-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    },
    'import/resolver': {
      typescript: './tsconfig.json'
    }
  }
};
