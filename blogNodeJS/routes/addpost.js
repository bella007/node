var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){
	router.post("/", function(req,res){
		MongoClient.connect("mongodb://usertest:123123@ds115166.mlab.com:15166/michaeldb", function(err, db) {
			if (err) throw err;
			if(!req.body.id){
				db.collection('posts', (err, collection) => {
					if (err) throw err;

					collection.insert(req.body)
				})
				db.collection('posts',(err, collection) => {
					if (err) throw err;

					collection.find().toArray(function(err, items){
						if(err) throw err;
						res.render('addpost', {blogs: items})
					})
				})
				db.close();
			}
			if(req.body.id){

				db.collection('posts',(err, collection) => {
					if (err) throw err;

					collection.remove({_id: new ObjectID(''+req.body.id+'')});
					collection.find().toArray(function(err, items){
						if(err) throw err;
						res.render('addpost', {blogs: items})
					})
				})
				db.close();
			}
		})
	})

	router.get("/", isAuthenticated, function(req,res){
		MongoClient.connect("mongodb://usertest:123123@ds115166.mlab.com:15166/michaeldb", function (err, db) {
			if (err) throw err;
			db.collection('posts',(err, collection) => {
				if (err) throw err;

				collection.find().toArray(function(err, items){
					if(err) throw err;
					res.render('addpost', {blogs: items})
				})
			})
			db.close();
		})
	});

	return router;

}



