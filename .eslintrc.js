module.exports = {
    parser: 'babel-eslint', // Use the parser that matches your project (e.g., babel-eslint for Babel projects)
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // If you're using React
      'prettier', // Disable conflicting ESLint rules with Prettier
    ],
    plugins: ['react'],
    rules: {
      // Customize ESLint rules based on your preferences
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/prop-types': 0, // Disable prop-types checking if not needed
      'no-unused-vars': 'warn',
      // Add more rules as needed...
    },
    settings: {
      react: {
        version: 'detect', // Auto-detect the installed React version
      },
    },
  };
  