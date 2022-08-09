const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.end("Hello World!!");
        return;
    }

    if(req.url === "/about"){
        res.end("About us page");
        return;
    }

    res.end(`<h1>Oops!! The page you are looking for is not a valid one</h1> <a href="/">Home Page</a>`);
    
});

server.listen(9999);