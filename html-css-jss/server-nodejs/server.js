const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`user visited ${req.url}`);
    res.end('hello!');
});

console.log('listening on http://localhost:9999');
server.listen(9999);