import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
)

export const User = mongoose.model('User',userModel)