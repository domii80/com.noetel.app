  
  var http = require('http');
  http.createServer(function (req: any, res:any) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello World!');
      res.end();
    }).listen(8080);
