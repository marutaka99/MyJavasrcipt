const http = require('http');
const fs = require('fs');

const server = http.createServer();
server.on('request', dorequest);
server.listen(1337);

function dorequest (req, res) {
  fs.readFile('../html/27node.html','UTF-8',doRead);
  const title = 'sample page';
  const msg = 'this is sample page prepared by program'
  function doRead(err, data) {
    const str = data.replace(/@@@title@@@/g,title)
      .replace(/@@@message@@@/,msg)
    res.setHeader('Content-Type','text/html');
    res.write(str);
    res.end();
  }
}
console.log('server running at http://127.0.0.1:1337/');