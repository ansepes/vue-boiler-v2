module.exports = {
  root: true,
  env: {
    node: true,
    node: true,
  },
  extends: [
    'plugin:vue/strongly-recommended', // Vue.js Style Guide Priority A and B(https://jp.vuejs.org/v2/style-guide/index.html)
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'standard', // JavaScript Standard Style(https://standardjs.com/)
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'prettier', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'prettier/prettier': 'error',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
}
