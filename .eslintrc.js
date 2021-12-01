module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "import/no-unresolved": 0,
        "max-len": [1, 2000, 2, {"ignoreComments": true}],
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-indent-props": [ 2, 4 ],
        "react/prop-types": 0,
        "react/button-has-type": 0,
        "react/no-array-index-key": 0,
        "react/sort-comp": 0,
        "no-param-reassign": 0,
        "camelcase": [0],
        "object-curly-newline": 0,
        "no-tabs": [0],
        "consistent-return": "off",
        "no-underscore-dangle": "off",
        "no-use-before-define": "off",
        "no-console": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off"
    }

};
