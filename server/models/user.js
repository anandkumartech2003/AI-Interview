import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        typr:String,
        required:true,
        unique:true,
        lowwercase:true
    },
    
    phone:{
        type:Number,
        required:true,
        min:10
    },
    age:{
        type:Number,
        min:14,
        max:15

    },
    password:{
        type:String,
        required:true,
        min:6

    }
})

export const User=mongoose.model("User",userSchema)

