var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/pug', function(req,res){
    res.render('temp');
})

// function rega(){
//     console.log('regi')
// }

// app.use(function(req,res,next){
//     console.log('do togo');
//     next();
// });

// app.get('/', function (req, res) {
//   res.sendFile(index.html);
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});