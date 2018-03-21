const express = require('express');
const app = express()
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:123@ds113736.mlab.com:13736/first_bd'

var tovar=[
	{
		nameOfGoods:'tovar1',
		price:300,
		opisanie: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio modi, at, qui deleniti deserunt.',
		img:'img/cat2.jpg',
		id:'1'
	},
	{
		nameOfGoods:'tovar2',
		price:200,
		opisanie: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio modi, at, qui deleniti deserunt.',
		img:'img/cat2.jpg',
		id:'2'
	},
	{	
		nameOfGoods:'tovar3',
		price:350,
		opisanie: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio modi, at, qui deleniti deserunt.',
		img:'img/cat2.jpg',
		id:'3'
	},
	{
		nameOfGoods:'tovar4',
		price:400,
		opisanie: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio modi, at, qui deleniti deserunt.',
		img:'img/cat2.jpg',
		id:'4'
	}
];

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

// app.use(function(req, res, next){
// 	app.send('do tago')
// 	next()
// })

// app.get('/', (req, res) => res.send('hello world'));

app.get('/123', (req, res) => { 
	
	MongoClient.connect(url, function (err, db) {
		
		db.collection('users', function (err, collection) {
			
			collection.find().toArray(function(err, items){
				if (err) throw err;
				console.log(items)
			res.send(items)
			})
			
			});
		});
					
	});

app.get('/tasks', (req, res) => { 
	
	MongoClient.connect(url, function (err, db) {
		
		db.collection('users', function (err, collection) {
			// task1
			// collection.find().toArray(function(err, items){
			// 	if (err) throw err;
			// 	console.log(items)
				
			// 	// collection.insert({ "name":"Mark", "age":26, "iin":345678, "sex":"male" });
			// 	console.dir(collection)
			// 	res.send(items)
			// })
			// task2
			// collection.find({"sex":"male"}).toArray(function(err, items){
			// 	if (err) throw err;
			// 	res.send(items)
			// })
			// task3
			collection.update({"name":"Inna"}, {"age":90}).toArray(function(err, items){
					if (err) throw err;
					res.send(items)
				})




			});
		});
					
	});

app.get('/pug', (req, res) => {
	res.render('templ', {title: 'pugPage', name: 'namePug', goods:tovar});
});
app.get('/:id', (req, res) => {
	res.render('cart', {goods:tovar, idd:req.params.id});
});

app.listen(3000, () => console.log('Example app on port 3000!'))