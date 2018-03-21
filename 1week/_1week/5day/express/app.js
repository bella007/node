var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static('public'));
app.use(express.static('static'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname+'/static/text.txt');
})

app.post('/', function (req, res) {
    res.send('Got a POST request');
  });

app.post('/as', function (req, res) {
    let f = '';
    fs.readdir('./static', (err, files) => {
        
        files.forEach(file => {
            f += file +"";
        });
            res.send(f);
    })
    
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});