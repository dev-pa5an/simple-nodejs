var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile-picture.png', function (req, res) {
    // Provide the correct path to the image file
    var imagePath = path.join(__dirname, 'profile-picture.png');

    try {
        var img = fs.readFileSync(imagePath);
        // Set the correct content type based on the file type
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(img, 'binary');
    } catch (error) {
        console.error('Error reading the image file:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, function () {
    console.log("App listening on port 3000!");
});
