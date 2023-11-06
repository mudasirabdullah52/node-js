// const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("in side the middle wear")
    next();
})

app.use((req, res, next) => {
    console.log("in side the  another middle wear")
    res.send(' <h1>this is greating from express</h1>')
})

// const server = http.createServer(app);

// server.listen(4000);
// insteal of ablve two commited lins we can use

app.listen(4000);