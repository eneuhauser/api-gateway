module.exports = {
    "root": true,
    "env": {
        "jest/globals": true
    },
    "extends": [
        "airbnb-base",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        // If enabled, add "eslint-plugin-react" to package.json
        //"plugin:react/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        //"prettier/react"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "prettier", "jest"],
    "rules": {
        "prettier/prettier": "error",

        // C2FO Preference
        "func-names": ["error", "always"],

        // Nest Standard
        "indent": ["error", 2],

        // overriding default length from 100 to 120; all other existing options must also be specified in the override
        // base: https://github.com/airbnb/javascript/blob/eslint-config-airbnb-v13.0.0/packages/eslint-config-airbnb-base/rules/style.js#L128
        "max-len": ["error", 120, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],

        // Just not practical
        "class-methods-use-this": 0,
        // Needed for Nest injection
        "no-useless-constructor": 0,
        // Needed to import Nest Testing
        "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.spec.ts"]}],
        // Standard Nest class definition
        "import/prefer-default-export": 0
    },
    "settings": {
        "import/extensions": [".ts"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".ts"]
            }
        }
    }
};

