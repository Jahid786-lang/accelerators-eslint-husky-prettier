// lint.js
import eslint from 'eslint'; // Import ESLint
const { ESLint } = eslint;

async function lint() {
  const eslint = new ESLint(); // Create an ESLint instance
  eslint.lintFiles(['src']); // Run linting on your source files

  const results = await eslint.format(); // Get linting results

  if (results.errorCount > 0) {
    console.error('Linting failed.');
    process.exit(1); // Exit with a non-zero status code on linting errors
  }

  console.log('Linting passed.');
}

export { lint };
