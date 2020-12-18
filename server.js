const http = require('http');
const app = require('./app');

//specify port
const port = process.env.PORT || 3000;

//create server
const server = http.createServer(app);

// Start the server
server.listen(port, function () {
    console.log("API server listening on port " + port);
});

module.exports = server;
