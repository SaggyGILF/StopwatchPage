// Imports
//const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 80;
const hostname = '0.0.0.0';


// Main routes to serve static files
app.use(express.static('public'));
app.use('/CSS', express.static(__dirname + 'public/CSS'));
app.use('/JS', express.static(__dirname + 'public/JS'));

// Views Config
app.set('views', './views');
app.set('view engine', 'ejs');

// Views
app.get('', (req, res) => {
    res.render('stopwatch');
});

// Listening...
app.listen(PORT, hostname, console.info(`Listening on port ${PORT}...`));
