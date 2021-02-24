const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Welcome to my site');
});

app.get('/profile', (req, res) => {
    res.end("Welcome to my profile!")
});

app.listen(9000);
console.log("listening on http://localhost:9000")