const mongoose = require('mongoose')
const Schema = mongoose.Schema

const obj = {
  username:String,
  password:String,
  email:String
}
const userModel=mongoose.model("user",new Schema(obj))
module.exports = userModel 