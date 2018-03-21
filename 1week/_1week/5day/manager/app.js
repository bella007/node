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

// app.get('/admin', function (req, res){
//     res.sendFile(__dirname+'/static/admin.html');
// });


app.post('/admin', urlencodedParser, function(req,res){
    console.log(req)
    if (req.body.inp_login=='qwe' && req.body.inp_password=='123'){
        
        // alex(__dirname, res)
        res.send('congrats! you are log in')
    }
    else (
        res.send('You lose!')
    )
});

app.get('/:id',  urlencodedParser, function (req, res){
    res.sendFile(__dirname+'/static/'+req.params.id+'.html');
});


function alex(folderParam, res) {
    let f = '';

    fs.readdir(folderParam, (err, files) => {
        let filesArray = [];
        let foldersArray = []
        files.forEach(file => {
            if( fs.lstatSync(file).isFile()){
                app.get('/'+file, (req, res) => {
                    
                    res.sendFile(folderParam + "/" + file)
                })
            }
            else {
                app.get('/'+file, (req, res) => {
                    alex(file, res)
                })
            }
            f += '<a href="'+file+'">' +file + "</a><br>";


        })
        res.send(f);
    })
}


// app.post('/admin_log', function (req, res) {
//     alex(__dirname, res)
           // for(let i=0;i<filesArray.length;i++){
        //     app.get('/'+filesArray[i], (req, res) => {
        //         console.log(1111)
        //         res.sendFile(__dirname + "/" + filesArray[i])
        //     })
        // }
        // for(let i=0;i<foldersArray.length;i++){
        //     app.get('/'+foldersArray[i], (req, res) => {
        //         console.log(1111)
        //         res.sendFile(__dirname + "/" + foldersArray[i])
        //     })
        // }
// });






















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
    if(body == 'pic.img'){res.send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNLrlXDI-TL8FKeJDtGvH2yVK6zZMF9XPmWYbsQ46thvDFNbSIAw')};
    
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
