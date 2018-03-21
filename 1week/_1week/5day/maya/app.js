var express = require('express');
var app = express();
var fs = require('fs')
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(express.static('static'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/kkk', function (req, res) {
    res.sendFile(__dirname+'/static/index.html');

});
app.get('/tmp', function (req, res) {
    res.sendFile(__dirname+'/static/tmp.html');
});
app.get('/page2', function (req, res) {
    res.sendFile(__dirname+'/static/page2.html');
});
app.get('/page3', function (req, res) {
    res.sendFile(__dirname+'/static/page3.html');
});
app.get('/page4', function (req, res) {
    res.sendFile(__dirname+'/static/page4.html');
});

app.post('/', urlencodedParser,function (req, res) {
    let body = req.body.name;
    res.send('body');
});

app.post('/', function (req, res) {
    res.send('Got a POST request');
});



app.post('/post2', function (req, res) {
    let f = [];
    fs.readdir('./static', (err, files) => {

        files.forEach(file => {
            f = [...f, file + " "]
        })
        res.send(f);
    })
});

app.post('/post1', function (req, res) {
    let f = [];
    fs.readdir('./public', (err, files) => {

        files.forEach(file => {
            f = [...f, file + " "]
        })
        res.send(f);
    })
});

//listFolder
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

                    // res.sendFile(folderParam + "/" + file)
                })
            }
            f += '<a href="'+file+'">' +file + "</a><br>";


        })
        res.send(f);
    })
}


app.post('/listFolder', function (req, res) {
    alex(__dirname, res)



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



});





app.post('/folder', urlencodedParser,function (req, res) {
    let body = req.body.name;
    if(body === 'static' || body === 'public'){
        let f = [];
        fs.readdir('./'+body+'', (err, files) => {

            files.forEach(file => {
                f = [...f, file]

            })
            res.send(f);
        })
    }
    else{
        res.send("It doesn't exist")
    }
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});