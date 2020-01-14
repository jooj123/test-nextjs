const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

let nextApp;

function getNextApp() {
  if (!nextApp) {
    nextApp = next({ dev });
  }

  return nextApp;
}

module.exports = getNextApp;
