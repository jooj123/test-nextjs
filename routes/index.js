const express = require('express');
const getNextApp = require('../next');

const nextApp = getNextApp();
const nextHandle = nextApp.getRequestHandler();
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/test/`, (req, res) => {
  nextApp.render(req, res, '/test', req.params);
});

// needed for nextjs
router.get(`*`, (req, res) => nextHandle(req, res));

module.exports = router;
