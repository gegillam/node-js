var excuses = require('excuses').developers;
var express = require('express');
var routes = require('./routes');
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var util = require("util");
var fs = require("fs")
app.use(cors());

fs.readdir('./img', function(err, filenames){
    if (err) throw err;
    console.log('images scraped from xkcd: ' + filenames.length);    
})

app.use(bodyParser.json());
app.use('/api/', routes);

app.get('/exc', function(req, res) {
    util.log(req);
  res.json({a: excuses.getRandom()});
});



app.use(express.static(__dirname + '/client'));

console.log(process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);