var express = require("express");
var dataController = require("./dataController");
var weatherController = require("./weatherController");
var xkcdController = require("./xkcdController");
var util = require("util");

var router = express.Router();

router.route('/data').post(dataController.post);
router.route('/data').get(dataController.get);
router.route('/data').put(dataController.update);
router.route('/data').delete(dataController.delete);

router.route('/xkcd').get(xkcdController.get);

router.route('/weather').get(weatherController.get)
module.exports = router;