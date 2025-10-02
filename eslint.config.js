// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import js from '@eslint/js'; // ESLint's core recommended JavaScript rules
import globals from 'globals'; // Provides global variable definitions for different environments
import typescript from 'typescript-eslint'; // TypeScript ESLint parser and rules
import react from 'eslint-plugin-react'; // React-specific linting rules
import reactHooks from 'eslint-plugin-react-hooks'; // Rules for React Hooks usage
import reactRefresh from 'eslint-plugin-react-refresh'; // React Fast Refresh validation
import jsxA11y from 'eslint-plugin-jsx-a11y'; // Accessibility linting for JSX

/** @type {import('eslint').Linter.Config[]} */ // TypeScript type annotation for config array
export default [
  // Enable ESLint's recommended JavaScript rules
  js.configs.recommended, // Apply TypeScript's strict ruleset (includes recommended + type-checked rules)
  jsxA11y.flatConfigs.recommended, // Apply accessibility rules for JSX
  ...typescript.configs.strict,
  {
    files: ['**/*.{ts,tsx}'], // Apply this config to TypeScript and TSX files only
    languageOptions: {
      globals: {
        ...globals.browser, // Include browser global variables (window, document, etc.)
        ...globals.es2020, // Include ES2020 global features (Promise, BigInt, etc.)
      },
      parserOptions: {
        project: true, // Enable TypeScript project for type-aware linting
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        ecmaFeatures: { jsx: true }, // Enable JSX parsing
        sourceType: 'module', // Treat files as ES modules
      },
    },
    settings: {
      react: { version: 'detect' }, // Auto-detect React version for appropriate rules
    },
    plugins: {
      react, // Register React plugin
      'react-hooks': reactHooks, // Register React Hooks plugin
      'react-refresh': reactRefresh, // Register React Refresh plugin
    },
    rules: {
      ...react.configs.recommended.rules, // Apply React's recommended rules
      ...react.configs['jsx-runtime'].rules, // Rules for new JSX transform (no React import needed)
      ...reactHooks.configs.recommended.rules, // Apply React Hooks rules (deps, exhaustive-deps)

      // React Refresh
      'react-refresh/only-export-components': [
        // Warn when files export non-components (breaks Fast Refresh)
        'warn',
        {
          allowConstantExport: true, // Allow exporting constants alongside components
        },
      ],

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        // Error on unused variables
        'error',
        {
          argsIgnorePattern: '^_', // Ignore unused args starting with underscore
          varsIgnorePattern: '^_', // Ignore unused vars starting with underscore
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off', // Don't require return types on functions
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Don't require types on module boundaries
      '@typescript-eslint/no-explicit-any': 'error', // Disallow 'any' type usage

      'react/prop-types': 'off', // TypeScript handles this
    },
  },
  {
    files: ['**/*.test-d.{ts,tsx}'], // TSD type test files
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Allow unused vars in type tests
    },
  },
  {
    files: ['**/*.js'], // Apply to plain JavaScript files
    ...typescript.configs.disableTypeChecked, // Disable TS rules for JS files
  },
  {
    ignores: [
      'dist',
      'build',
      'node_modules',
      'coverage',
      '*.min.js',
      'vite.config.ts',
      'src/examples/typescript-labs/**/*', // Skip TypeScript lab files (intentionally broken for students)
      'src/examples/deeper-thoughts/**/*', // Example with intentional anti-patterns
      'src/examples/e-commerce-explorer/**/*', // Example with intentional anti-patterns
      'src/examples/social-dashboard/**/*', // Example with intentional anti-patterns
      'src/examples/shared/performance-utils.ts', // Utility with intentional any types for flexibility
    ],
  },
  ...storybook.configs['flat/recommended'],
];
