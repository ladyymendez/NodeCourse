const  http = require('http');

const server = http.createServer((req,res)=>{
  console.log("Hi", req)
  res.setHeader('Content-Type', 'text/html');
  res.write(`
   <html>
     <body>
       Hola 
     </body>
   </html>
  `)
  res.end();

});

server.listen(3000);
