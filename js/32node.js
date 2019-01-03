const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');
const cookie = require('cookie');

const index = fs.readFileSync('../html/31node.ejs', 'utf8');
const style = fs.readFileSync('../css/design30.css', 'utf8');

const server = http.createServer();
server.on('request', doRequest);
server.listen(1337);


function doRequest(req, res) {
  const path = url.parse(req.url);


  switch (path.pathname) {
  // eslint-disable-next-line no-case-declarations
  case '/':
    let msg = 'There is no cookie';
    if (req.headers.cookie != null) {
      const ck = cookie.parse(req.headers.cookie); // ��
      msg = 'cookie:' + ck.lasturl + ', ' + ck.lasttime;
    }
    const tmp = ejs.render(index, {
      title : 'Index Page',
      msg : msg
    });
    res.setHeader('Content-Type', 'text/html');
    res.write(tmp);
    res.end();
    break;


  case '/css/design30.css':
    res.setHeader('Content-Type', 'text/css');
    res.write(style);
    res.end();
    break;


  case '/favicon.ico':
    break;


  // eslint-disable-next-line no-case-declarations
  case '/time':
    const d = new Date().toDateString();
    var ck1 = cookie.serialize('lasttime', d, {
      maxAge : 100
    });
    res.setHeader('Set-Cookie', ck1);
    res.setHeader('Content-Type', 'text/plain');
    res.write('SET TIME-COOKIE!');
    res.end();
    break;


  default:
    // eslint-disable-next-line no-redeclare
    var ck1 = cookie.serialize('lasturl', path.pathname, {
      maxAge : 100
    }); // ��
    res.setHeader('Set-Cookie', ck1);
    res.setHeader('Content-Type', 'text/plain');
    res.write('SET URL-COOKIE!');
    res.end();
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');