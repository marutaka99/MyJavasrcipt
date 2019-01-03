let http = require('http');
 
let server = http.createServer();
server.on('request', doRequest);
server.listen(1234);


function doRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello world!');
  res.end();
}