const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        const data = fs.readFileSync('example.txt', 'utf8');
        res.write('<html>');
        res.write('<head><title>First page</title></head>');
        res.write(`<body><h4>${data}</h4> <form action="/massage" method ="POST"> <input type = "text" name="massage"> <button type="submit">Send</button></form></body>`);
        res.write('</html>');
        return res.end();
    }
    if (url === '/massage' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const massage = parseBody.split('=')[1];
            console.log(parseBody);
            fs.writeFile('example.txt', massage, (err) => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            })

        })
    }
    // res.setHeader('Content-Type', "text/html")
    res.write('<html>');
    res.write('<head><title>First page</title></head>');
    res.write('<body><h1>Hello from node js</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;