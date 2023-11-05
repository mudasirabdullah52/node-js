const http = require('http');


const server = http.createServer((req, res) => {
    // console.log(req.url, req.headers, req.method);
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>First page</title></head>');
        res.write('<body> <form action="/massage" method ="POST"> <input type = "text" name="massage"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>First page</title></head>');
        res.write('<body><h1>Hello from Home</h1> </body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>First page</title></head>');
        res.write('<body><h1>Hello from about</h1> </body>');
        res.write('</html>');
        return res.end();
    }
    res.write('<html>');
    res.write('<head><title>First page</title></head>');
    res.write('<body><h1>Hello from node js</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(4000);