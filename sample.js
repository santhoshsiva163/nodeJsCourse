var fs = require("fs");
fs.readFile('demo1.txt', function(err, data){
    if (err) {
        return console.log.error(err);
    }
    console.log("Async data : " + data.toString());
});
var data = fs.readFileSync('demo1.txt');
console.log('sync data : ' + data.toString());
console.log('program end');