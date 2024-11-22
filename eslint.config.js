import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true, // 启用 Vue 支持
  typescript: false, // 启用 TypeScript 支持
  // 你可以在这里添加或覆盖规则
  rules: {
    'style/comma-dangle': ['error', 'only-multiline'],
    'vue/comma-dangle': ['error', 'only-multiline'],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],

    'no-case-declarations': 'warn',
    'no-throw-literal': 'warn',
    'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
    'node/prefer-global/process': ['warn', 'always'],

    // 关闭规则
    'eqeqeq': 'off',
    'vue/eqeqeq': 'off',
    'no-console': 'off',
    'no-use-before-define': 'off',
    'ts/no-use-before-define': 'off',
    'one-var': 'off',
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/no-empty-function': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/attributes-order': 'off',
    'vue/block-order': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/require-explicit-emits': 'off',
    'regexp/no-unused-capturing-group': 'off',
    'jsdoc/require-returns-description': 'off',
  },
  ignores: [
    'dist',
    'dist*',
    'node_modules',
    'public',
    '**/*.d.ts',
    '.eslint-config-inspector',
    '.config',
    '.vscode',
    'plop',
    '.husky',
    'src/lib'
  ],
})
