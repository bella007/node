var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

module.exports = function(){
	router.get("/",function(req,res){

		MongoClient.connect("mongodb://usertest:123123@ds115166.mlab.com:15166/michaeldb", function (err, db) {
			if (err) throw err;
			db.collection('posts',(err, collection) => {
				if (err) throw err;

				collection.find().toArray(function(err, items){
					if(err) throw err;
					console.log(items)
					res.render('blog', {blogs: items})
				})
			})
			db.close();
		})
	});

return router;

}


