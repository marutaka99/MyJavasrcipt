const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', dorequest);
server.listen(1337);

function dorequest (req, res) {
  fs.readFile('../html/26node.html','UTF-8',doRead);

  function doRead(err, data) {
    res.setHeader('Content-Type','text/html');
    res.write(data);
    res.end();
  }
}
console.log('server running at http://127.0.0.1:1337/');