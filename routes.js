var express = require("express");
var dataController = require("./controllers/dataController");
var weatherController = require("./controllers/weatherController");
var xkcdController = require("./controllers/xkcdController");

var router = express.Router();

router.route('/data').post(dataController.post);
router.route('/data').get(dataController.get);
router.route('/data').put(dataController.update);
router.route('/data').delete(dataController.delete);

router.route('/xkcd').get(xkcdController.get);

router.route('/weather').get(weatherController.get)
module.exports = router;