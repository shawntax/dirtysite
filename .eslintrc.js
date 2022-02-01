module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  ignorePatterns: ['**/node_modules/*', '**/out/*', '**/.next/*'],
  extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier', 'react'],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}
