const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');


const server = http.createServer();
server.on('request', doRequest);
server.listen(1337);


function doRequest(req, res) {
  const path = url.parse(req.url);
  switch(path.pathname){
  
  case '/':
    fs.readFile('../html/29node.html', 'UTF-8', function (err, data){
      let result = data.replace(/@@@@@/,'何か書いて');
      res.setHeader('Content-Type','text/html');
      res.write(result);
      res.end();
    });
    break;
          
  case '/form':
    if (req.method == 'POST'){
      let reqBody = '';
      req.on('data',function(data){
        reqBody += data;
      });
      req.on('end',function(){
        const form = qs.parse(reqBody);
        const input1 = form.input1;
        fs.readFile('../html/29node.html', 'UTF-8', function(err, data){
          let result = data.replace(/@@@@@/,'あなたは、「' + input1 + '」と書きました');
          res.setHeader('Content-Type','text/html');
          res.write(result);
          res.end();
        });
      });
    } else {
      res.setHeader('Content-Type','text/plain');
      res.end('ERROR! - CAN\'T GET-');
    }
    break;
          
  default:
    res.setHeader('Content-Type','text/plain');
    res.end('ERROR! - NO PAGE-');
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');