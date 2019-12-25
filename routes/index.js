var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('qassfsdgfdg')
  console.log(req.session.whatever)
  if(req.session.whatever){
    res.send({
      login:true,
      username:req.session.whatever.username
    })
  } else {
    res.send({
      header:{
        resultCode:900,
        connect:'ok'
      },
      data:{
        login:false,
      }
    })
  }
});

module.exports = router;
