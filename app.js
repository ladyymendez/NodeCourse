const  http = require('http');

const server = http.createServer((req,res)=>{console.log("Hi", req)});

server.listen(3000);
