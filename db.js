var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/MyDatabase')
var db = mongoose.connection
db.on('error',function callback(){
  console.log('error')
})
db.once('open',function callback(){
  console.log('success')
})
module.exports = mongoose