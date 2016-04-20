var fs = require("fs"),
util = require("util"),
$ = require('cheerio'),
http = require('http'),
request = require("request");


module.exports = {
    get: function (req, res) { 
        var _ = req.query
        util.log('downloading records: ' + _.start + ' - ' + _.end);
        for (var i = _.start; i < _.end; i++){
            getSrc(i);
        }
    }
};

var getSrc = function(i) {
    request({
        uri: "http://www.xkcd.com/" + i,
    },
    function(error, res, body) {
        if (error) throw error;
        var img = $(body).find('#comic').find('img')[0];
        
        if (img) download('http:' + img.attribs.src, 'img/' + i + '.png', function(){
            util.log(i + ' downloaded successfully.')
        });
    });
};

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
      if (err) throw err;
    //console.log('content-type:', res.headers['content-type']);
    //console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};