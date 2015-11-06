var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cacheManifest = require('connect-cache-manifest');

app.use(express.static('public'));

app.use(cacheManifest({
    manifestPath: '/app.manifest',
    files: [{
        dir: __dirname + '/../public/css',
        prefix: '/css/'
    }, {
        dir: __dirname + '/../public/fonts',
        prefix: '/fonts/'
    }, {
        dir: __dirname + '/../public/img',
        prefix: '/img/'
    }, {
        dir: __dirname + '/../public/js',
        prefix: '/js/'
    }, {
        dir: __dirname + '/../public',
        prefix: '/'
    }],
    networks: ['*'],
    fallbacks: []
}));


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