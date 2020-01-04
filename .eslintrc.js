module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    "import/no-unresolved": 0,
    'no-shadow': ['error', { allow: ['state'] }],
    'no-param-reassign': ["error", { "props": false }]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
};
