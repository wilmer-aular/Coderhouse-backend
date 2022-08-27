let  router = require('express-promise-router')();
let apiRouter = require('./api');

router.use('/',apiRouter);

module.exports = router;
  