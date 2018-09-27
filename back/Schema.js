const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName:{type:String,required:true },
    mail: String,
    phone:{type:String,required:true},
    profil:{type:String,default:'user'},
    password:{type:String,required:true},
    })
    module.exports.userSchema = userSchema

    
    const adSchema = new mongoose.Schema({
        title: {type:String,required:true },
        category:{type:String,required:true },
        price: {type:Number,required:true },
        unity:{type:String,required:true },
        isAvaible:{type:Boolean,default:true },
        owner: {type: userSchema,required:true},
        date: {type:Date, default:Date.now},
        description:{type:String,required:true,minlength:15,maxlength:1055},
        city:{type:String,required:true },
        img:{type:Array,required:true},
        vue:{type:Number,default:0}
    })
    module.exports.adSchema =adSchema

