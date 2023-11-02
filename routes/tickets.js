var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tickets', { title: 'Search Results - TICKETS' });
});

module.exports = router;
