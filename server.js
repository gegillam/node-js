var excuses = require('excuses').developers,
express = require('express'),
routes = require('./routes'),
bodyParser = require("body-parser"),
cors = require("cors"),
app = express(),
util = require("util"),
https = require("https"),
fs = require('fs');

app.use(cors());

app.use(bodyParser.json());
app.use('/api/', routes);

app.get('/exc', function(req, res) {
  res.json({a: excuses.getRandom()});
});

app.get('/ip', function(req, res) {
  res.json({ip: req.connection.remoteAddress.split('f:')[1]});
});

app.use(express.static(__dirname + '/client'));

var server = app.listen(process.env.PORT || 80, function(){
console.log(process.argv);
  var port = server.address().port;
  console.log('API listening on :%s', port);
});
