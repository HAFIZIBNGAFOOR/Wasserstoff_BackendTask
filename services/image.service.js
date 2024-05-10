import { ImageModel } from "../models/image.model.js";
import { imageRekognition } from "./aws.service.js"

export const postImage = async({
    body:{
        imageUrl,
    }
})=>{
    if(!imageUrl){
        throw {
            status:400,
            message:'Image required for AI Annotations'
        }
    }
    const imageRecognition = await imageRekognition(imageUrl);
    if(imageRecognition.error){
        throw {
            error:imageRecognition.message,
            status:500
        }
    }else{
        const image = await  ImageModel.create({
            imageUrl,
            rekognitionLabels:imageRecognition
        })
    }
}

export const manualAnnotation = async({
    body:{
        imageId,
        annotations
    }
})=>{
    if(!imageId && !annotations){
        throw{
            status:400,
            message:'image and annotations are required'
        }
    }
    const  manualAnnotation = await ImageModel.findByIdAndUpdate(
        {_id:imageId},
        {$set:{
            mannualAnnotations:annotations
        }}
    )
    if(!manualAnnotation){
        throw {
            status:400,
            message:'Something went wrong . Try Again'
        }
    }
    return true
}

export const getImage = async({
    query:{
        imageId
    }
})=>{
    const image = await ImageModel.findById(imageId);
    if(image){
        return image
    }else throw{
        status:400,
        message:'Not a valid image'
    }
}

export const allImages = async ()=>{
    const images = await ImageModel.find();
    if(images && images.length>0){
        return images
    }else throw{
        status:400,
        message:'No schools are available'
    }
}