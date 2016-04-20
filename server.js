var excuses = require('excuses').developers,
express = require('express'),
routes = require('./routes'),
bodyParser = require("body-parser"),
cors = require("cors"),
app = express(),
util = require("util");

app.use(cors());

app.use(bodyParser.json());
app.use('/api/', routes);

app.get('/exc', function(req, res) {
  res.json({a: excuses.getRandom()});
});

app.use(express.static(__dirname + '/client'));

console.log(process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);