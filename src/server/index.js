var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));

//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

var mongoose = require('mongoose');

// init mongodb
//mongoose.connect(`mongodb://mbdavid:${process.env.DBPWD}@staff.mongohq.com:10033/mbdavid`, {}, (err)=> {
//	console.log('mongo connected');
//});