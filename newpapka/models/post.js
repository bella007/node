var mongoose = require('mongoose');

module.exports = mongoose.model('Posts',{
	id: String,
	post_name: String,
	post_body: String
});