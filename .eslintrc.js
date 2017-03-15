module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "quotes": [
            "error",
            "single"
        ],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions" : {
        "ecmaVersion": 6
    }
};
