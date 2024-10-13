import globals from 'globals';
import eslintJavaScript from '@eslint/js';
import eslintTypeScript from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';
import vitest from 'eslint-plugin-vitest';
import eslintPluginNoRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

/**
 * Define paths to be ignored by ESLint
 * These are paths that we don't want ESLint to lint.
 */
const ignores = ['dist/**/*', 'node_modules', 'build', 'public', '.github', '.vite'];

/**
 * Define override rules for ESLint
 * These are rules that we want to override from the default ESLint rules.
 */
const eslintJavaScriptRuleOverrides = {
    /**
     * Warns about TODOs and FIXMEs in comments
     * This rule is useful for catching forgotten or leftover TODOs and FIXMEs in your code.
     */
    'no-warning-comments': 'off',

    /**
     * Requires curly braces after statements
     * This rule enforces consistent brace style for all control statements.
     */
    curly: 'error',

    /**
     * Disallows the use of a single variable declaration
     * This rule enforces that each variable gets its own var, let, or const declaration.
     */
    'one-var': ['error', 'never'],

    /**
     * Disables the rule that enforces sorting import declarations
     * This rule is turned off because we might want to group imports in a specific way that doesn't follow sorting.
     */
    'sort-imports': 'off',

    /**
     * Disables the rule that requires object keys to be sorted
     * This rule is turned off because we might want to group object keys in a specific way that doesn't follow sorting.
     */
    'sort-keys': 'off',

    /**
     * Disables the rule that warns against magic numbers
     * This rule is turned off because we might have valid reasons for using magic numbers in our code.
     */
    'no-magic-numbers': 'off',

    /**
     * Disables the rule that requires promises to be rejected with Error objects
     * This rule is turned off because we might have valid reasons for rejecting promises with non-Error objects.
     */
    'prefer-promise-reject-errors': 'off',

    /**
     * Warns when functions exceed a certain number of lines
     * This rule helps to enforce a maximum length for functions to maintain readability and maintainability.
     */
    'max-lines-per-function': 'warn',

    /**
     * Disables the rule that requires comments to be capitalized
     * This rule is turned off because it may not always be necessary to capitalize comments,
     * depending on the team's style guide.
     */
    'capitalized-comments': 'off',

    /**
     * When this rule is enabled, ESLint will throw an error if it detects variable shadowing.
     * This rule is turned off because it conflicts with TypeScript's no-shadow rule.
     */
    'no-shadow': 'off',

    /** Warns on maximum allowed statements in a function block */
    'max-statements': ['warn', 20],

    /**
     * Enforces ternary operator not to be used in the code. Some believe that ternary operator leads to unclear code
     * This rule is turned off because we may need the use of non-nested ternary operators.
     */
    'no-ternary': 'off',

    /** Warns on maximum number of parameters in function definitions */
    'max-params': ['warn', 3],

    /** Warns on maximum number of lines in a file */
    'max-lines': ['warn', 300],
};

/**
 * Define any rule overrides for the React plugin
 * These are rules that we want to override for the React plugin.
 */

const eslintPluginReactRuleOverrides = {
    /** 
    'react/react-in-jsx-scope': 'off'
     * This rule is turned off because with modern bundlers (like Webpack or Parcel),
     * React doesn't need to be in scope when using JSX. This is especially true if
     * you're using the new JSX Transform introduced in React 17.
     */
    'react/react-in-jsx-scope': 'off',
};

/**
 * Define override rules for JSDoc ESLint plugin.
 * This allows for customization of our JSDoc linting behavior.
 */
const jsdocRuleOverrides = {
    'jsdoc/require-jsdoc': [
        'error',
        {
            enableFixer: false,
            require: {
                ArrowFunctionExpression: true,
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: true,
                FunctionExpression: true,
                MethodDefinition: true,
            },
        },
    ],
};

/**
 * Export the ESLint configuration
 * This configuration includes all the JavaScript rules, the strict configuration for TypeScript,
 * and the recommended configuration for React, adjusted for compatibility.
 */
export default [
    {
        ...eslintJavaScript.configs.all,
        ignores,
        rules: {
            ...eslintJavaScript.configs.all.rules,
            ...eslintJavaScriptRuleOverrides,
        },
    },
    ...eslintTypeScript.configs.strict.map((config) => ({
        ...config,
        rules: {
            ...config.rules,
            '@typescript-eslint/no-shadow': 'error',
        },
        ignores,
    })),
    ...fixupConfigRules(eslintPluginReact).map((config) => ({
        ...config,
        ignores,
        rules: {
            ...config.rules,
            ...eslintPluginReactRuleOverrides,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    })),
    {
        ignores,
        plugins: {
            'react-hooks': fixupPluginRules(eslintPluginReactHooks),
        },
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules,
            'react-hooks/exhaustive-deps': 'error',
        },
    },
    {
        name: 'jsdoc',
        ...jsdoc.configs['flat/recommended-typescript-error'],
        rules: {
            ...jsdoc.configs['flat/recommended-typescript-error'].rules,
            ...jsdocRuleOverrides,
        },
        ignores,
    },
    {
        name: 'testing',
        files: ['src/**/*.test.{ts,tsx}'],
        plugins: {
            vitest,
        },
        rules: {
            ...vitest.configs.recommended.rules,
        },
    },
    {
        plugins: {
            'no-relative-import-paths': eslintPluginNoRelativeImportPaths,
        },
        rules: {
            'no-relative-import-paths/no-relative-import-paths': [
                'warn',
                { allowSameFolder: true },
            ],
        },
    },
    {
        name: 'last/prettier',
        languageOptions: {
            globals: globals.browser,
        },
        ignores,
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            ...eslintPluginPrettier.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
        },
    },
];
