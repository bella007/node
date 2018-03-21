var express = require('express');
var fs =require('fs');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));
app.use(express.static('static'));

app.get('/', function (req, res) {
//   res.render('index.html');
});

app.get('/admin', function (req, res){
    res.render('index.html');
});

app.post('/', urlencodedParser, function(req,res){
    let body=req.body.name;
    if(body == "static"){
        fs.readdir('./'+body+'', (err, fi)=>{
            let f=[];
            fi.forEach(fi =>{
                f=[...f, fi]
            });
            res.send(f)
        })
    }
});

app.post('/lol', urlencodedParser, function (req, res){
    let body = req.body.name;
    if(body == 'pic.img'){res.send('https://cs4.pikabu.ru/post_img/big/2016/05/22/7/1463916971164740130.png')};
    
});

// app.post('/', urlencodedParser, function (req, res){
//     let body = req.body.name;
//     res.send(body);
// });

// app.post('/', function (req, res){
//     let dir = fs.readdir('./static', function(err, file){
//         file.forEach(file =>{
//         f=file + ",";
//     });
//     res.send(f) 
//     });
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
