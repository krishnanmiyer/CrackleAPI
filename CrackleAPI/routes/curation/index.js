const router = require('express').Router();
const api = require('../../public/common/service.js')
const service = "curation";
/**
 * get:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
router.get('/:sectionName', function (req, res, next) {
  var url = '/Service.svc/curations/' + req.params.sectionName

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
router.get('/:sectionName/:geoCode', function (req, res, next) {
  var url = '/Service.svc/curation/' + req.params.sectionName + '/' + req.params.geoCode

  api.get(req, service, url, function (statusCode, result) {
    res.statusCode = statusCode;
    res.send(result);
  });
});

module.exports = router;