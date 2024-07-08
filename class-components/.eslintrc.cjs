module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '.prettierrrc'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        'react',
        '@typescript-eslint',
        'react-compiler'
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        'react/react-in-jsx-scope': 'off',
        'react-compiler/react-compiler': 'error',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
