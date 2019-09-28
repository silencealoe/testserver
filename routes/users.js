var express = require('express');
var router = express.Router();
var user = require('../model/user');

/* GET users listing. */
router.post('/register', function(req, res, next) {
  console.log(req.body)
  user.create({
    username:req.body.username,
    password:req.body.password,
    email:req.body.email
  }).then(result=>{
    console.log(result)
    res.send({
      ok:1
    })
  })
});
router.get('/register',function(req,res,next) {
  console.log(req.query)
  user.find({
    email:req.query.email
  }).then(resu=>{
    if(resu.length !== 0){
      res.send({
        ok:0
      })
     } else {
        res.send({
          ok:1
        })
      }
  })
})

router.post('/login',function(req,res,next) {
  console.log(req.body.email)
  user.find({
    email:req.body.email,
    password:req.body.password
  }).then(r=>{
    console.log(r)
    if(r.length === 1){
      req.session.whatever = r[0]
      console.log('session')
      console.log(req.session.whatever)
      res.send({
        ok:1,
        username:req.session.whatever.username
      })
    } else {
      res.send({
        ok:0
      })
    }
  })
})
module.exports = router;
