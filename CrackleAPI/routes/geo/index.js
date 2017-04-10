const router = require('express').Router();
const api = require('../../public/common/service.js')
const service = "geo";

/**
 * get:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.get('/', function (req, res, next) {
  var url = "/geo";
  api.get(req, service, url, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});

/**
 * get:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.get('/:ip', function (req, res, next) {
  var url = '/geo/' + req.params.ip;
  
  api.get(req, service, url, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});


module.exports = router;