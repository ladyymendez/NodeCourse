const  fs = require('fs');

const requestHandler = (req, res)=>{
    const url= req.url;
    const method= req.method;
    if(url==='/'){
        console.log(11);
        res.write(`
        <html>
        <body>
        <form action="/message" method="POST" >
            <input type="text" name="message"> <button type="submit">Send</button></input>
            </form>
            </body>
            </html>
            `);
            return res.end();
    }
    if(url==='/message'&& method==="POST")
    {
        console.log(1);
        const body = [];
        req.on('data',(chunk) => {
            console.log(2);
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        });
            
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
}

module.exports = requestHandler;