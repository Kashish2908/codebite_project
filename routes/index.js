var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/bookings', function(req,res){
  res.render('bookings')
})

module.exports = router;
