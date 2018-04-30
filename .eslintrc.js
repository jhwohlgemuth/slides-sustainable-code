module.exports = {
    env: {
        commonjs: true,
        es6: true
    },
    globals: {
        Promise: true
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        polyfills: ['promises']
    },
    extends: ['omaha-prime-grade', 'plugin:react/recommended'],
    rules: {
        'object-curly-spacing': ['error'],
        'quotes': ['error', 'single']
    }
};
