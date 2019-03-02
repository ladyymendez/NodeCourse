const  http = require('http');

const server = http.createServer((req,res)=>{

  const url= req.url;
  if(url==='/'){
  console.log("Hi", req)
  res.setHeader('Content-Type', 'text/html');
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
  console.log("Hi", req)
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
