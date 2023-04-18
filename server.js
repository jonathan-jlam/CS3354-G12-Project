const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000; // binding to localhost:3000

const app = express();

let mainPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(mainPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(mainPath, "index.html"));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(mainPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(mainPath, "register.html"));
})

app.listen(PORT, (req, res) => {
    console.log('Server listening on port ' + PORT + '...')
})