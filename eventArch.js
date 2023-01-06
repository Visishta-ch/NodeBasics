const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req.url,req.method,req.headers);
    const url = req.url;
    if(url === '/'){
    res.write('<html>')
    res.write('<head><title>First page</title></head>')
    res.write('<body><h1>Welcome to node</h1></body>')
    res.write('</html>')
    res.end();
    }else if(url === '/node'){
        res.write('<html>')
    res.write('<head><title>Node page</title></head>')
    res.write('<body><h1>Welcome to node js</h1></body>')
    res.write('</html>')
    res.end();
   

    }else if(url === '/home'){
        res.write('<html>')
    res.write('<head><title>Home page</title></head>')
    res.write('<body><h1>Welcome to home</h1></body>')
    res.write('</html>')
    res.end();
   

    }else if(url === '/About'){
        // res.setHeader('content-type', 'about/html')
        res.write('<html>')
        res.write('<head><title>About page</title> </head>')
        res.write('<body><h1>Welcome to About page</h1></body>')
        res.write('</html>')
       return res.end();
   

    }
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>First page</title>')
    // res.write('<body><h1>Welcome to node')
    // res.write('</html>')
    // res.end();
   

});

server.listen(3000);

