const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    role:{
        type:String,
        default:'user'
    }
},{timestamps:true})

const User= mongoose.model("User",userSchema)
module.exports=User