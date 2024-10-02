
const express = require('express')
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   name:{
       type : String,
   },
   email:{
       type : String,
   },
   password:{
       type : String,
   },
   contact:{
       type : String,
   },

})

const User = mongoose.model("user" , userSchema , "user");
module.exports = User;