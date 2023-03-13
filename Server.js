"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const BasicHtml_1 = require("./BasicHtml");
function runServer() {
    var http = require('http');
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(BasicHtml_1.htmltemplate);
        res.end();
    }).listen(8080);
}
exports.runServer = runServer;
