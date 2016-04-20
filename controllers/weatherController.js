var fs = require("fs"),
util = require("util"),
config = JSON.parse(fs.readFileSync('config.json', 'utf8')),
http = require('http');

module.exports = {
    get: function(req, res) {
      console.log('hit');
      var d = new Date();
      util.log(req.query);
      var weatherReq = http.request('http://api.openweathermap.org/data/2.5/' 
      + 'weather?id=' + (req.query.id || config.city)
        +'&uk&appid=' + config.apiKey
        + '&units=' + (req.query.units || config.units),
        function(weatherRes) {
          weatherRes.on('data', function(chunk){
            res.json(JSON.parse(chunk));
        });
      });
      weatherReq.end();
    }
};
