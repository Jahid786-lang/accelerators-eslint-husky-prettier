#!/usr/bin/env node

const { program } = require('commander');
const { lint, format } = require('../accelerator-scripts');

program
  .version('1.0.0')
  .description('A CLI for your React accelerator')
  .option('-l, --lint', 'Run linting')
  .option('-f, --format', 'Run code formatting')
  .parse(process.argv);

if (program.lint) {
  lint();
}

if (program.format) {
  format();
}
