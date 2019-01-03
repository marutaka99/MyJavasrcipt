const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');

const index = fs.readFileSync('../html/31node.ejs', 'utf8');
const style = fs.readFileSync('../css/design30.css', 'utf8');

const server = http.createServer();
server.on('request', doRequest);
server.listen(1337);


function doRequest(req, res) {
  const path = url.parse(req.url);


  switch(path.pathname){
  // eslint-disable-next-line no-case-declarations
  case '/':
    let ck = req.headers.cookie;
    let tmp = ejs.render(index, {
      title:'Index Page',
      msg:'cookie:' + ck
    });
    res.setHeader('Content-Type','text/html');
    res.write(tmp);
    res.end();
    break;
      
  case '/css/design30.css':
    res.setHeader('Content-Type','text/css');
    res.write(style);
    res.end();
    break;
  
  case '/favicon.ico':
    break;


  default:
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Set-Cookie',['lasturl=' + path.pathname]);
    res.write('SET COOKIE!');
    res.end();
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');