const http = require('http');
const url = require('url');
const fs = require('fs');
// var bodyParser = require('body-parser');

// const hostname = '127.0.0.1';
// const port = 3000;

const server = http.createServer((req, res) => {
    let path = url.parse(req.url).pathname
    if(path=='/admin'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Hello World</h1>');
        res.end();}
    else if(path=='/') {
        let data = fs.readFileSync('index.html')
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();}
    else if(path=='/text.txt') {
        let data = fs.readFileSync('text.txt')
        
        res.setHeader('Content-Type', 'text/html');
        res.write(data);
        res.end();}

        
    // else if(path=='/5.jpg') {
    //     let img = fs.readFileSync('5.jpg')
    //     res.setHeader('Content-Type', 'image/jpg');
    //     res.write(img);
    //     res.end();}

    else if(path=='/5.jpg') {
        fs.readFile('5.jpg', function(err, data){

            // setTimeout(lol,2000)
            // function lol () { 
            //     res.setHeader('Content-Type', 'image/jpg');
            //     res.write(data);
            //     res.end();}
            // }
            
})}
        

    else if(path=='/style.css') {
        let img = fs.readFileSync('style.css')
        res.setHeader('Content-Type', 'text/css');
        res.write(img);
        res.end();}
    else if(path=='/script.js') {
        let img = fs.readFileSync('script.js')
        res.setHeader('Content-Type', 'text/javascript');
        res.write(img);
        res.end();}
    else if(path=='/jquery-3.2.1.min.js') {
        let img = fs.readFileSync('jquery-3.2.1.min.js')
        res.setHeader('Content-Type', 'text/javascript');
        res.write(img);
        res.end();}
            
    else {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1> Hello World</h1>');
        res.end();}
    
});



server.listen(3000,'localhost', () => {
  console.log(`Server running`);
});{}