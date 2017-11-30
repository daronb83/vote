var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Root Directory");
  res.sendFile('index.html', { root: 'public' });
});

/* GET vote */
router.get('/voter', function(req, res, next) {
  console.log("Vote Page");
  res.sendFile('index.html', { root: 'public' });
});

/* GET admin */
router.get('/admin', function(req, res, next) {
  res.sendFile('admin.html', { root: 'public' });
});

module.exports = router;
