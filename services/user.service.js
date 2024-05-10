import { generateTokens } from "../auth/jwt.js"
import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"


export const postUser = async({
    body:{
        username,
        email,
        password,
        mobile
    }
})=>{
    const existingUser = await User.findOne({
        $or: [
            { email: email },
            { mobile: mobile },
        ]
    });
    if(existingUser){
        const isMobile = existingUser.mobile == mobile
        const isEmail = existingUser.email == email
        throw `${
            isEmail && isMobile ? "Email and Mobile" : isEmail ? "Email" : "Mobile"
        } Already Exists`;
    }
    const hashPassword = bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        mobile,
        password:hashPassword
    })
    return true
    
}


export const doLogin = async ({
    body:{email,password}
})=>{
    if(!email || !password){
        throw{
            status:400,
            message:"Email and password are required"
        }
    }
    const user = await User.findOne({email})
    if(!user){
        throw { status:400, message:'User doesnt exist'}
    }
    if(user.isBlocked == true){
        throw { status:400, messaage:'User is Blocked , Contact admin'}
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        throw { status:400, message:" Incorrect password"}
    }
    const tokens = generateTokens({id:user._id,roleId:user.role})
    return tokens
}

export const blockOrUnblockUser=async({
    body:{
        userId
    }
})=>{
    const user = await User.findById(userId)
    if(!user) throw{
        status:400,
        message:'User doesnt exists'
    }
    if(user && user.isBlocked){
        user.isBlocked = false
    }else{
        user.isBlocked = true
    }
    await user.save();
    const users = await User.find();
    return users
}

export const users = async()=>{
    const users = await User.find();
    if(users){
        return users
    }else{
        throw {
            status:400,
            message:'No user exists'
        }
    }
}
