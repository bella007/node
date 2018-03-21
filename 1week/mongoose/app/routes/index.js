var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var UserSchema = require('../db/models/users');
mongoose.connect('mongodb://admin:123@ds129024.mlab.com:29024/mymongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/abc', function(req, res, next) {
  let user = req.body
  var User = mongoose.model('Users', UserSchema);

  var Bella = new User(user)
  console.log(user);
  Bella.save(function(err) {
    if (err) throw err;
 
    console.log('Book successfully saved.');
});
  // res.send(req.body)
  res.send(JSON.stringify(Bella))
  
})

module.exports = router;
