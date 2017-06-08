var express = require('express');
var router = express.Router();

/* Test Hello World Endpoint*/
router.get('/', function(req, res, next) {
    res.send({
        'title': 'Hello World'
    });
});

module.exports = router;
