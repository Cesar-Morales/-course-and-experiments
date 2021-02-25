const express = require('express');
const path = require('path');

const complements = [
    "component 1",
    "component 2",
    "component 3",
    "component 4",
    "component 5",
    "component 6",
    "component 7",
    "component 8"
];

function getRandomComplement(){
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

//create a new server
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/complement', (req, res) => {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.use('/public', express.static("./public"));

app.listen(9090)
console.log('listening on http://localhost:9090')
