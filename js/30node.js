const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');

const index = fs.readFileSync('../html/30node.ejs', 'utf8');
const style = fs.readFileSync('../css/design30.css', 'utf8');

const server = http.createServer();
server.on('request', doRequest);
server.listen(1337);


function doRequest(req, res) {
  var path = url.parse(req.url);


  switch(path.pathname){
  case '/':
    var tmp = ejs.render(index, {
      title:'Index Page',
      msg:'This is sample page'
    });
    res.setHeader('Content-Type','text/html');
    res.write(tmp);
    res.end();
    break;
      
  case '/css/design30.css': // �X�^�C���V�[�g�p
    res.setHeader('Content-Type','text/css');
    res.write(style);
    res.end();
    break;
  
  default:
    res.setHeader('Content-Type','text/plain');
    res.write('ERROR');
    res.end();
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');