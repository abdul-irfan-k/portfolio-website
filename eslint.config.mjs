import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        languageOptions: {
            parser: compat.config.parser,
            // parserOptions: {
            //     project: './tsconfig.json',
            //     tsconfigRootDir: __dirname,
            //     sourceType: 'module',
            // },
        },
        rules: {
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            '@typescript-eslint/no-explicit-any': 'off',
            "@typescript-eslint/ban-ts-comment": "off"
        },
    },
];

export default eslintConfig;