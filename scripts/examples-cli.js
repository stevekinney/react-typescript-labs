#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-undef */

import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');
const EXAMPLES_DIR = join(PROJECT_ROOT, 'src', 'examples');
const INDEX_HTML_PATH = join(PROJECT_ROOT, 'index.html');

// Discover all examples
async function discoverExamples() {
  const entries = await readdir(EXAMPLES_DIR, { withFileTypes: true });
  const examples = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      try {
        const indexPath = join(EXAMPLES_DIR, entry.name, 'index.tsx');
        await readFile(indexPath);
        examples.push({
          name: entry.name,
          path: `/src/examples/${entry.name}/index.tsx`,
          displayName: entry.name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        });
      } catch {
        // Skip directories without index.tsx
      }
    }
  }

  return examples.sort((a, b) => a.name.localeCompare(b.name));
}

// Update index.html with selected example
async function updateIndexHtml(examplePath) {
  const html = await readFile(INDEX_HTML_PATH, 'utf-8');
  const updated = html.replace(
    /<script type="module" src="\/src\/examples\/[^"]+\/index\.tsx"><\/script>/,
    `<script type="module" src="${examplePath}"></script>`
  );
  await writeFile(INDEX_HTML_PATH, updated, 'utf-8');
}

// Display menu and handle selection
async function interactiveMenu(examples) {
  let selectedIndex = 0;

  // Clear screen and hide cursor
  console.clear();
  process.stdout.write('\x1B[?25l');

  const renderMenu = () => {
    // Move cursor to top
    readline.cursorTo(process.stdout, 0, 0);
    readline.clearScreenDown(process.stdout);

    console.log('\x1b[36m\x1b[1m🎯 Select a React Example\x1b[0m\n');
    console.log('\x1b[2mUse ↑↓ arrows to navigate, Enter to select, Ctrl+C to quit\x1b[0m\n');

    examples.forEach((example, index) => {
      if (index === selectedIndex) {
        console.log(`\x1b[32m▶ ${example.displayName} ←\x1b[0m`);
      } else {
        console.log(`  ${example.displayName}`);
      }
    });
  };

  return new Promise((resolve) => {
    renderMenu();

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    const onKeypress = (str, key) => {
      if (key.name === 'up') {
        selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : examples.length - 1;
        renderMenu();
      } else if (key.name === 'down') {
        selectedIndex = selectedIndex < examples.length - 1 ? selectedIndex + 1 : 0;
        renderMenu();
      } else if (key.name === 'return') {
        cleanup();
        resolve(examples[selectedIndex]);
      } else if (key.ctrl && key.name === 'c') {
        cleanup();
        process.exit(0);
      }
    };

    const cleanup = () => {
      process.stdin.removeListener('keypress', onKeypress);
      if (process.stdin.isTTY) {
        process.stdin.setRawMode(false);
      }
      process.stdout.write('\x1B[?25h'); // Show cursor
      process.stdin.pause();
    };

    process.stdin.on('keypress', onKeypress);
  });
}

// Main function
async function main() {
  try {
    console.log('🔍 Discovering examples...\n');
    const examples = await discoverExamples();

    if (examples.length === 0) {
      console.log('\x1b[33m⚠️  No examples found in src/examples/\x1b[0m');
      process.exit(1);
    }

    const selected = await interactiveMenu(examples);

    console.clear();
    await updateIndexHtml(selected.path);

    console.log('\n✅ Selected: \x1b[32m' + selected.displayName + '\x1b[0m');
    console.log('📝 Updated index.html to load: \x1b[36m' + selected.path + '\x1b[0m');
    console.log('\n🚀 Run \x1b[1mnpm run dev\x1b[0m to start the example\n');
  } catch (err) {
    console.error('\n\x1b[31m❌ Error:\x1b[0m', err.message);
    process.exit(1);
  }
}

main();
