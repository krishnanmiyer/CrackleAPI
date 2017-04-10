const router = require('express').Router();
const curation = require('./curation');
const geo = require('./geo');
const whitelist = require('./whitelist');

router.use('/Service.svc/curation', curation);
router.use('/Service.svc/geo', geo);
router.use('/Service.svc/whitelist', whitelist);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;