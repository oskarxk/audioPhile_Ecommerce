const http = require('http');
const { request } = require('https');

const server = http.createServer((request, Response) => {
	Response.writeHead(200, { 'Content-Type': 'text/plain' });
	Response.end('Hello World');
});

server.listen(3000, 'localhost', () => {
	console.log('Serwer uruchomiony na http://localhost:3000/');
});
