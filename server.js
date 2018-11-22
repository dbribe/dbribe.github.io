const express = require('express');
const app = express();

const port = 8090;

app.use(express.static(__dirname));

app.all("*", function(req, res) {
    const filesIndex = req.path.indexOf("/static");
    if (filesIndex >= 0) {
        console.warn(req.path);
        res.sendFile(__dirname + '/dbribeapp' + req.path);
        return;
    }
    console.warn(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);