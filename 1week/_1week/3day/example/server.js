var http = require('http'),
url = require('url'),
path = require('path'),
fs = require('fs');
var mimeTypes = {
"html": "text/html",
"jpeg": "image/jpeg",
"jpg": "image/jpeg",
"png": "image/png",
"js": "text/javascript",
"css": "text/css"};

console.log(path.resolve(__dirname)+'blablaDir');
console.log(path.resolve(__filename)+'blablaFile');

new http.createServer(function(req, res) {
    if(req.url=='/') {
        let ext=path.extname(__filename);
        res.setHeader('Content-Type', 'text/plain')        
    // res.write(path.dirname(__dirname));
    res.write('\n');
    // res.write(__dirname,__filename);
    res.write('\n');
    console.dir(JSON.stringify(path.parse(__dirname))+'pathPars')
    res.write(path.parse(__dirname).dir);
    // res.write('\n');
    // res.write(path.resolve(__dirname, __filename));
    res.write('\n');
    // res.write(path.extname(__filename));
        res.write('\n');
        // res.write(path.basename(__filename,ext));
    res.end();
    }
}).listen(3000);







// http.createServer(function(req, res) {
// var uri = url.parse(req.url).pathname;
// var filename = path.join(process.cwd(), unescape(uri));
// var stats;

// try {
//     stats = fs.statSync(filename); // throws if path doesn't exist
// } catch (e) {
//     res.writeHead(404, {'Content-Type': 'text/plain'});
//     res.write('404 Not Found\n');
//     res.end();
//     return;
// }
// if (stats.isFile()) {
//     // path exists, is a file
//     var mimeType = mimeTypes[path.extname(filename).split(".").reverse()[0]];
//     res.writeHead(200, {'Content-Type': mimeType} );
//     var fileStream = fs.createReadStream(filename);
//     fileStream.pipe(res);
// } else if (stats.isDirectory()) {
//     // path exists, is a directory
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Index of '+uri+'\n');
//     res.write(' show index?\n');
//     res.end();
// } else {
//     // Symbolic link, other?
//     // TODO: follow symlinks?  security?
//     res.writeHead(500, {'Content-Type': 'text/plain'});
//     res.write('500 Internal server error\n');
//     res.end();
// }

// }).listen(3000);