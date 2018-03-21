var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    password: Number
});

module.exports = UserSchema