module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: 'eslint:recommended',
    parserOptions: { ecmaVersion: 12 },
    rules: {
        'no-console': 'warn',
        'no-empty-function': 'error',
        'no-lone-blocks': 'error',
        'no-unused-labels': 'error',
        'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
        'require-await': 'error',
        curly: 'error',
        'no-use-before-define': 'error',
        'no-undef': 'error',
        'no-var': 'error',
    },
};
