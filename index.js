const http = require('http');

const server = http.createServer((req,res)=> {
    // res.end('Server is created');
    if(req.url === '/about') {
        res.end('About page');
    }
    else if (req.url === '/contact') {
        res.end('Contact page');
    }
    else if(req.url === '/') {
        res.end('Home page');
    }
    else {
        res.end('Page Not Found');
    }
});



server.listen(5000, ()=> {
    console.log('Server is Working');
});