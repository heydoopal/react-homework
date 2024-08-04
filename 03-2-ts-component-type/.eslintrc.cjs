export default = {
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaVersion: 2020, 
    ecmaFeatures: {
      jsx: true 
    }
  },
  settings: {
    react: {
      version: 'detect' 
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended' 
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', 
    '@typescript-eslint/explicit-module-boundary-types': 'off' 
  }
}
