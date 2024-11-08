module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'no-console': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  ignorePatterns: [
    'src/graphql/generated.ts',
    'expo-env.d.ts',
    'metro.config.js',
    'src/drizzle/migrations/*',
  ],
};
