// format.js
import prettier from 'prettier'; // Import Prettier

function format() {
  try {
    // Format your code using Prettier
    // Replace with your Prettier configuration
    prettier.format('src/**/*.js', {
      /* your Prettier options */
    });
    console.log('Code formatting completed.');
  } catch (error) {
    console.error('Code formatting failed:', error.message);
    process.exit(1); // Exit with a non-zero status code on formatting errors
  }
}

export { format };
