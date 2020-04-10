module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': 'vuetify',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["error", 2, {
      "ignoredNodes": ["TemplateLiteral"]
    }],
    "template-curly-spacing" : "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
