module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint',
      sourceType: 'module'
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    extends: ['plugin:vue/recommended','standard'],
    plugins: [
      'vue'
    ],
    'rules': {
      // allow paren-less arrow functions
      'arrow-parens': 0,
      'semi': 0,
      // allow async-await
      'generator-star-spacing': 0,
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  };