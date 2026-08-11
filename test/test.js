const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { scaffold } = require('../src/botscaffold.js');

function run() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'botscaffold-test-'));
  const cwd = process.cwd();
  process.chdir(tmp);
  try {
    const dir = scaffold('telegram', 'testbot');
    assert.ok(fs.existsSync(path.join(dir, 'telegram.js')), 'telegram.js should be created');
    assert.ok(fs.existsSync(path.join(dir, 'package.json')), 'package.json should be created');
    console.log('✔ botscaffold tests passed');
  } finally {
    process.chdir(cwd);
  }
}

run();
