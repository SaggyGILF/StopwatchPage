// Imports
//const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 80;
const hostName = '192.168.1.1';


// Main routes to serve static files
app.use(express.static('public'));
app.use('/JS', express.static(__dirname + 'public/CSS'));
app.use('/JS', express.static(__dirname + 'public/JS'));

// Views Config
app.set('views', './views');
app.set('view engine', 'ejs');

// Views
app.get('', (req, res) => {
    res.render('stopwatch');
});

// Listening...
app.listen(PORT, console.info(`Listening on port ${PORT}...`));
