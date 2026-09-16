const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'IMC.html'));
});

app.get('/IMC.html', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'IMC.html'));
});

const PORT = 3000;

app.listen(PORT, function() {
    console.log('Servidor rodando em http://localhost:' + PORT);
});