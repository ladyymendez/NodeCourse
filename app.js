const  http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

  const url= req.url;
  const method= req.method;
  if(url==='/'){
  res.write(`
   <html>
     <body>
      <form action="/message" method="POST" name="message">
        <input type="text"> <button type="submit">Send</button></input>
      </form>
     </body>
   </html>
  `);
  return res.end();
  
  }
  if(url==='/message'&& method==="POST")
  {
    fs.writeFileSync('message.txt','Hi this a message from the client');
    res.statusCode= 302;
    res.setHeader('Location','/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write(`
   <html>
     <body>
       Hello from Node js
     </body>
   </html>
  `)
  res.end();

});

server.listen(3000);
