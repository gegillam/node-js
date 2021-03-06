var express = require('express'),
util = require('util'),
mysql = require('mysql'),
bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host     : 'db02.cqberbcjeyum.us-east-1.rds.amazonaws.com',
  user     : 'Administrator',
  password : 'GGQ3Cff*Se',
  database : 'db02'
});

module.exports = {
    post : function(req, res){
        util.log(req.body);
        var query = connection.query('INSERT into `table` SET ?', req.body, function(err, rows, fields){
            if (err) {
             util.log(err);
             res.json({
                res: res.statusCode,
                message:err,
                qry: query.sql
              });
              return;
            }
            
            res.json({
              res: res.statusCode,
              affectedRows: rows.affectedRows, 
              body: req.body,
              query:query.sql
            });
        });
    },
    get: function(req, res){
      connection.query('SELECT * from `table`', function(err, rows, fields) {
        if (err) throw err;
        res.json(rows);
      });
    },
    delete: function(req,res){
      var query = connection.query('DELETE from `table` WHERE id =  ?' , req.body.id, function(err, rows){
util.log(req);
           if (err) throw err;
           res.json({
            affectedRows: rows.affectedRows,
            query: query.sql
          });
      });
    },

    deleteById: function(req,res){
      var query = connection.query('DELETE from `table` WHERE id = ' + req.params.id , req.body.id, function(err, rows){
util.log(req);
           if (err) throw err;
           res.json({
            affectedRows: rows.affectedRows,
            query: query.sql
          });
      });
},
    update: function(req, res){
      var query = connection.query(
        'UPDATE `table` set ? where id = ' + req.body.id , req.body, function(err, rows){
          if (err) util.log(query.sql);
        util.log(err);
        util.log(rows);
        util.log(query.sql);
        res.json({err: err, rows: rows, query: query.sql});
      });
    }
};
