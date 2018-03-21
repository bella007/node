const express = require('express');
const app = express()
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bella07:<dbpassword>@ds113736.mlab.com:13736/first_bd'
app.use(express.static('public'));
app.use(rega);
app.use(function(req, res, next){
	console.log('1111')
	next()
})
function rega(req, ress, next){
	console.log('rega')
	next()
}

app.use(function(req, res, next){
	console.log('2222')
	next()
})

app.use(function(req, res, next){
	console.log('3333')
	next()
})


// app.get('/', (req, res) => res.send('hello world'));
app.get('/ffggh', (req, res) => { 
	
	MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
		
		db.collection('users', function (err, collection) {
			
			collection.find().toArray(function(err, items){
				if (err) throw err;
				console.log(items)
res.send(items)
			})
			
			});
		});
					
	});
	// res.file(__dirname + '/index1.html')
app.listen(3000, () => console.log('Example app on port 3000!'))