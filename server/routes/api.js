var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/posts', function(req, res, next) {
  res.json('respond with a resource FROM API BRO');
});

module.exports = router;
