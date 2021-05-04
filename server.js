const http = require('http');
const app = require('./app');
const port = 8080;

// creating the server
const server = http.createServer(app);

// set the port number
server.listen(port);
