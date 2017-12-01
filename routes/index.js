var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Candidate = mongoose.model('Candidate');

//-------Root Pages----------// 

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Root requested");
  res.sendFile('index.html', { root: 'public' });
});

/* GET vote */
router.get('/voter', function(req, res, next) {
  console.log("Voter Page requested");
  res.sendFile('index.html', { root: 'public' });
});

/* GET admin */
router.get('/admin', function(req, res, next) {
  res.sendFile('admin.html', { root: 'public' });
});


//-------Candidates----------//

/* PARAM candidate */
router.param('candidate', function(req, res, next, id) {
  var query = Candidate.findById(id);

  query.exec(function (err, candidate){
    if (err) { return next(err); }
    if (!candidate) { return next(new Error("No such candidate")); }
    req.candidate = candidate;
    return next();
  });
});

/* GET candidates */
router.get('/candidates', function(req, res, next) {
  console.log("GET /candidates");

  Candidate.find(function(err, candidates) {
    if(err) { return next(err); }
    res.json(candidates);
  });
});

/* GET candidates/:candidate */
router.get('/candidates/:candidate', function(req, res) {
  res.json(req.candidate);
});

/* POST candidates */
router.post('/candidates', function(req, res, next) {
  console.log("POST /candidates");
  var candidate = new Candidate(req.body);

  candidate.save(function(err, candidate) {
    if(err) { return next(err); }
    res.json(candidate);
  });
});

/* PUT candidates/:candidate/vote */
router.put('/candidates/:candidate/vote', function(req, res, next) {
  console.log("PUT candidate");

  req.candidate.vote(function(err, candidate) {
    if(err) { return next(err); }
    res.json(candidate);
  });
});

/* DELETE candidates */
router.post('/candidates', function(req, res,next) {
  console.log("DELETE candidates");
});

module.exports = router;
