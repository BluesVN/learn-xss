var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req);
  // console.log(res);

  res.set('X-XSS-Protection', 0);//不让浏览器拦截
  res.render('index', { title: 'Express', xss: req.query.xss });//获取输入search字段
});

module.exports = router;
