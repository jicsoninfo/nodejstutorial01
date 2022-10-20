var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end('<h1>Hello World!</h1>');

  fs.readFile('demofile1.html', function(err, data) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });


  fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });

  fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });

//   fs.unlink('mynewfile2.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

  fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });


}).listen(8080);

console.log('your server is running');
console.warn('your server is running................');