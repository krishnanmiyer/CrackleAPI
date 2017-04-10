const router = require('express').Router();
const api = require('../../public/common/service.js')
const service = "whitelist";

/**
 * get:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.get('/', function (req, res, next) {
  var url = "/whitelist";
  api.get(req, service, url, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});

/**
 * post:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.post('/', function (req, res, next) {
  var url = '/whitelist';
  var data = req.body; //convert into JSON

  api.post(req, service, url, data, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});

/**
 * delete:  REST delete request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.delete('/:ip', function (req, res, next) {
  var url = '/whitelist/' + req.params.ip;
  
  api.delete(req, service, url, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});

module.exports = router;