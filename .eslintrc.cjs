const errorOnlyProd = 'warn';
const error = 'error';
const indent = 2;
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'unused-imports',
    'react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'array-bracket-newline': [errorOnlyProd, 'consistent'],
    'array-bracket-spacing': [errorOnlyProd, 'never', {
      arraysInArrays: false,
      objectsInArrays: false,
      singleValue: false
    }],
    'array-callback-return': [errorOnlyProd, {
      allowImplicit: true
    }],
    'array-element-newline': [errorOnlyProd, {
      ArrayExpression: 'consistent',
      ArrayPattern: {
        minItems: 3
      }
    }],
    'arrow-body-style': [errorOnlyProd, 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'arrow-parens': [errorOnlyProd, 'as-needed'],
    'arrow-spacing': [errorOnlyProd, {
      after: true,
      before: true
    }],
    'block-scoped-var': [errorOnlyProd],
    'block-spacing': errorOnlyProd,
    'brace-style': [errorOnlyProd, '1tbs', {
      allowSingleLine: true
    }],
    'camelcase': [errorOnlyProd, {
      allow: [],
      ignoreDestructuring: true,
      ignoreGlobals: true,
      ignoreImports: true,
      properties: 'never'
    }],
    'comma-dangle': [errorOnlyProd, 'never'],
    'comma-spacing': [errorOnlyProd, {
      after: true,
      before: false
    }],
    'complexity': [error, {
      max: 7
    }],
    'computed-property-spacing': [errorOnlyProd, 'never'],
    'consistent-return': 'off',
    'default-case-last': error,
    'dot-location': [errorOnlyProd, 'property'],
    'dot-notation': [errorOnlyProd],
    'function-paren-newline': [errorOnlyProd, {
      minItems: 5
    }],
    'id-length': [error, {
      exceptions: ['x', 'y', 'h', 'e', 'i', '_', 'z'],
      min: 2,
      properties: 'never'
    }],
    'implicit-arrow-linebreak': [errorOnlyProd, 'beside'],
    'indent': [errorOnlyProd, indent, {
      ArrayExpression: 'first',
      flatTernaryExpressions: true,
      FunctionDeclaration: {
        parameters: 'first'
      },
      ImportDeclaration: 'first',
      SwitchCase: 0,
      VariableDeclarator: 'first'
    }],
    'key-spacing': [errorOnlyProd, {
      afterColon: true,
      beforeColon: false,
      mode: 'minimum'
    }],
    'keyword-spacing': [errorOnlyProd, {
      after: true,
      before: true
    }],
    'lines-between-class-members': [errorOnlyProd, 'always'],
    'max-classes-per-file': [error, 1],
    'max-depth': [error, {
      max: 4
    }],
    'max-nested-callbacks': [error, {
      max: 3
    }],
    'max-params': [error, {
      max: 5
    }],
    'newline-per-chained-call': [errorOnlyProd, {
      ignoreChainWithDepth: 3
    }],
    'no-alert': error,
    'no-await-in-loop': error,
    'no-caller': error,
    'no-console': 'off',
    'no-debugger': 'off',
    'no-duplicate-imports': error,
    'no-empty-function': [error, {
      allow: ['constructors']
    }],
    'no-eval': error,
    'no-extend-native': error,
    'no-implicit-coercion': [error, {
      allow: ['!!']
    }],
    'no-lone-blocks': error,
    'no-lonely-if': error,
    'no-multi-assign': error,
    'no-multiple-empty-lines': [errorOnlyProd, {
      max: 1,
      maxBOF: 1,
      maxEOF: 0
    }],
    'no-nested-ternary': error,
    'no-promise-executor-return': error,
    'no-prototype-builtins': 'off',
    'no-return-assign': error,
    'no-sequences': error,
    'no-template-curly-in-string': error,
    'no-throw-literal': error,
    'no-trailing-spaces': [errorOnlyProd, {
      ignoreComments: true,
      skipBlankLines: true
    }],
    'no-unneeded-ternary': error,
    'no-unreachable-loop': error,
    'no-unsafe-optional-chaining': [error, {
      disallowArithmeticOperators: true
    }],
    'no-useless-computed-key': error,
    'object-curly-newline': [errorOnlyProd, {
      ExportDeclaration: {
        consistent: true,
        minProperties: 5,
        multiline: true
      },
      ImportDeclaration: 'never',
      ObjectExpression: {
        consistent: true,
        minProperties: 5,
        multiline: true
      },
      ObjectPattern: 'never'
    }],
    'object-curly-spacing': [errorOnlyProd, 'always', {
      arraysInObjects: true,
      objectsInObjects: true
    }],
    'object-property-newline': [errorOnlyProd, {
      allowAllPropertiesOnSameLine: true
    }],
    'object-shorthand': [errorOnlyProd, 'always'],
    'one-var': [errorOnlyProd, {
      const: 'never',
      let: 'never',
      separateRequires: true,
      var: 'never'
    }],
    'operator-assignment': [errorOnlyProd, 'never'],
    'operator-linebreak': [errorOnlyProd, 'after', {
      overrides: {
        ':': 'before',
        '?': 'before'
      }
    }],
    'padded-blocks': [errorOnlyProd, 'never'],
    'prefer-arrow-callback': errorOnlyProd,
    'prefer-const': [errorOnlyProd, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],
    'prefer-exponentiation-operator': error,
    'prefer-rest-params': error,
    'prefer-spread': error,
    'prefer-template': errorOnlyProd,
    'quote-props': [errorOnlyProd, 'consistent-as-needed', {
      keywords: false
    }],
    'quotes': [errorOnlyProd, 'single', {
      allowTemplateLiterals: true,
      avoidEscape: true
    }],
    'require-await': error,
    'rest-spread-spacing': [errorOnlyProd, 'never'],
    'semi': [errorOnlyProd, 'always', {
      omitLastInOneLineBlock: true
    }],
    'semi-spacing': [errorOnlyProd, {
      after: true,
      before: false
    }],
    'semi-style': [errorOnlyProd, 'last'],
    'space-before-blocks': errorOnlyProd,
    'space-before-function-paren': [errorOnlyProd, {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never'
    }],
    'space-in-parens': [errorOnlyProd, 'never'],
    'space-infix-ops': [errorOnlyProd, {
      int32Hint: false
    }],
    'space-unary-ops': [errorOnlyProd, {
      nonwords: false,
      overrides: {},
      words: true
    }],
    'template-curly-spacing': [errorOnlyProd, 'never'],
    'react/prop-types': 'off',
    'unused-imports/no-unused-imports': errorOnlyProd,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};
