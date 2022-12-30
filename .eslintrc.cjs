// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended', // accessibility rules on JSX elements
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
		'prettier',
		'plugin:react-hooks/recommended'
	],
	settings: {
		react: {
			// Tells eslint-plugin-react to automatically detect the version of React to use.
			version: 'detect'
		},
		// 'import/parsers': {
		// 	'@typescript-eslint/parser': ['.ts', '.tsx']
		// },
		// Tells eslint how to resolve imports
		'import/resolver': {
			typescript: {},
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	},
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint', 'jsx-a11y'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		camelcase: 'error',
		'spaced-comment': 'error',
		quotes: ['error', 'single'],
		'no-duplicate-imports': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'import/no-unresolved': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error'
	}
};
