module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true,
        "node": true
    },
    "extends": ["airbnb", "eslint:recommended"],
    "parser": "babel-eslint",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jest"
    ],
    "rules": {
        "import/no-dynamic-require": 0,
        "react/jsx-filename-extension": [
            1,
            { "extensions": [".js", ".jsx"] }
        ],
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "jsx-a11y/href-no-hash": "off",
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "function-paren-newline": [
            "error",
            "consistent"
        ],
        "no-undef": "error"
    }
};