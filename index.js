const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`<h1>${ process.env.NODE_ENV }</h1>`)
}).listen(3000);