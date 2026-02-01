#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const scriptPath = path.join(__dirname, '..', 'scripts', 'generate.py');

// Pass all args to the Python script
const command = `uv run "${scriptPath}" ${args.join(' ')}`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  process.exit(error.status || 1);
}
