import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['build/**', 'node_modules/**']
  },
  {
    files: ['Gruntfile.js', 'src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'commonjs',
      globals: globals.node
    },
    rules: {
      ...js.configs.recommended.rules,
      'comma-dangle': ['error', 'never']
    }
  }
];
