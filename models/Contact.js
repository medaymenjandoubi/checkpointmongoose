const mongoose = require('mongoose')

//creation du schema

const ContactSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:{
        type:String,
        required:true,
        unique : true
    }
})
 