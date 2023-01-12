const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url,req.method,req.headers);
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        // const pathName = path.join(__dirname, 'message.txt')
        fs.readFile('message.txt', 'utf8', (err, data) =>{

            console.log("reading from msg.txt file + ",data)
       
    res.write('<html>')
    res.write('<head><title>First page</title></head>')
    res.write(`<body>${data}</body>`)
    res.write('<body><form action="/message" method="POST"><input type="text" name="mesage"><button type="submit">Send</button></form></body>')
    res.write('</html>')
   return res.end();
    })
}
    if(url === '/message' && method === 'POST'){
       
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk)
            console.log(chunk)
        });
        return req.on('end', ()=>{
            const parsedData = Buffer.concat(body).toString();
            const msg = parsedData.split('=')[1];
            fs.writeFile('message.txt',msg, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                
                return res.end();
               
            });
            // console.log(parsedData)
        })
            // fs.writeFileSync('message.txt','Dummy');
           
    }
   res.setHeader('Content-Type', 'text/html')
   res.write('<html>');
   res.write('<head><title>Message</title></head>')
   res.write('<body><h1>Welcome to node</h1><body>');
   res.write('</html>')
   res.end();

});

server.listen(3000);

