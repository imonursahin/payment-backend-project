var http = require('http');
const app = require('./app')

http.createServer(app).listen(5050);

console.log('Server running at http://127.0.0.1:5050/');