module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 80,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
      },
    ],
    'vue/multi-word-component-names': 0,
  },
};
