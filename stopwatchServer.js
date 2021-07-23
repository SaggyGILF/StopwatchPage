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
app.listen(PORT, hostName, console.info(`Listening on port ${PORT}...`));



// Route for reading files in public directory
/*app.get('/', (req, res, next) => {
    res.render('stopwatch.html');
    next();
});

// Main route to serve static files
app.use(express.static(__dirname + 'public'));

// Listening...
app.listen(PORT, console.info(`Listening on port ${PORT}...`));
*/




//const static = require('node-static');
//var fileServer = new static.Server('./public');
/*const requestListener = (req, res) => {
    fs.readFile('./public/stopwatch.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`${err}`);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    });
    fs.readFile('./public/stopwatch.css', (err, data) => {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`${err}`);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        }
    });
    fs.readFile('./public/stopwatch.js', (err, data) => {
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(`${err}`);
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        }
    });
    fileServer.serve(req, res, function (err, result) {
        if (err) { // There was an error serving the file
            console.error("Error serving " + req.url + " - " + err.message);

            // Respond to the client
            res.writeHead(err.status, err.headers);
            res.end();
        }
    });
};*/
/*const server = http.createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
});*/
//server.listen(PORT);