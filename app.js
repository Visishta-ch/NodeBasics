const http = require('http');  

function rqListener(req, res){

    console.log(req);
    console.log('vish')

}
const server = http.createServer(rqListener);

server.listen(4000)
