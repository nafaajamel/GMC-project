const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://localhost:27017/ekrili')
.then(()=>console.log('connected'))
.catch(err=>console.log('errrr', err))

const userSchema = new mongoose.Schema({
fullName: String,
mail: String,
profil:String,
password:String
})

const adSchema = new mongoose.Schema({
    title:String,
    category:String,
    price: String,
    pu:String,
    isAvaible:Boolean,
    owner: String,
    date: {type:Date, default:Date.now},
    discription:String,
    city:String
})

 const User =  mongoose.model('users',userSchema)
 const Ad = mongoose.model("ads",adSchema)
const user = new User({})