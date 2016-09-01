var express = require('express'),
util = require('util'),
bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());


var x = true;

module.exports = {
    post : function(req, res){
        util.log(req.connection.remoteAddress);
        x = !x;
        res.json({
          res: res.statusCode,
          body: x,
        });

    },
    get: function(req, res){
      res.json(x);
    },

};
