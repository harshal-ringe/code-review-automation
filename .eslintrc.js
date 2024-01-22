module.exports = {
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier', 'plugin:react-hooks/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'no-empty': 'off',
		'no-console': 'off',
		'no-unused-vars': 'off',
		'no-unreachable': 'off',
		'no-useless-escape': 'off',
		'no-prototype-builtins': 'warn',
		'react/prop-types': 'off',
		'react/jsx-key': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-string-refs': 'warn',
		'react/no-unknown-property': 'warn',
		'react/no-direct-mutation-state': 'warn',
		'react/jsx-no-duplicate-props': 'warn',
		'no-dupe-keys': 'warn',
		'no-self-assign': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
	globals: {
		BASEURL: 'readonly',
		$: 'readonly',
		_: 'readonly',
		jQuery: 'readonly'
	},
};
