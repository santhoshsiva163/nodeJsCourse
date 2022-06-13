var http = require('http');
var fs = require("fs");
http.createServer(function(req, res) {
    fs.rename('demo1.txt', "demo2.txt", function(err) {
        if(err) {
            return console.log.error(err);
        }
        res.write("file name successfully");
        res.end();
    })
}).listen(8080);