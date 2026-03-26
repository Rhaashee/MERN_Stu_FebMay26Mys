// Creating a simple HTTP Server

const http = require("http");

// createServer(): creates a http server instance -> Accepts a callback with two important objects
// 1. req : incoming request details 
// 2. res : outgoing response control

const server = http.createServer(function(req,res){
    // writeHead() sets the response status code and headers 
    res.writeHead(200,{"Content-type" : "text/plain"});
    // end() sends the response body and closes the response 
    res.end("Hello from NodeJS HTTP Server");
});

// listen() binds the server to a port and starts accepting requests
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
});