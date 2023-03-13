import { htmltemplate } from './BasicHtml';

export function runServer() : void {
    var http = require('http');
    http.createServer(function (req: any, res:any) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(htmltemplate);
        res.end();
      }).listen(8080);
  

}

  