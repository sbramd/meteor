const babel = require("./.eslintrc.babel.json");
const typescript = require("./.eslintrc.typescript.json");

module.exports = {
	env: {
		browser: true,
		jest: true,
		node: true
	},
	globals: {
		document: true,
		JSX: true,
		localStorage: true,
		window: true
	},
	settings: {
		"import/resolver": {
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				paths: ["src"]
			}
		}
	},
	...babel,
	overrides: [typescript]
};
