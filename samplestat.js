var http = require('http');
var fs = require("fs");
http.createServer(function(req, res) {
    fs.stat('demo2.txt', function(err, stats) {
        if(err) {
            return console.log.error(err);
        }
        console.log(stats);
        res.write("is it file :" + stats.isFile());
        res.write("is it directory :" + stats.isDirectory());
        res.end();
    })
}).listen(8080);