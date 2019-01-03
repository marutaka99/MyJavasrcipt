const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer();
server.on('request', doRequest);
server.listen(1337);


function doRequest(req, res) {
  let path = url.parse(req.url);
  switch(path.pathname){
  // eslint-disable-next-line no-case-declarations
  case '/':
    fs.readFile('../html/28node.html', 'UTF-8', doRead);
    // eslint-disable-next-line no-inner-declarations
    function doRead(err, data) {
      res.setHeader('Content-Type','text/html');
      res.write(data);
      res.end();
    }
    break;
          
  case '/helo':
    res.setHeader('Content-Type','text/plain');
    res.end('HELO!');
    break;
          
  default:
    res.setHeader('Content-Type','text/html');
    res.end('ERROR! - NO PAGE-');
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');