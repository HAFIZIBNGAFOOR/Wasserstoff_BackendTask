import mongoose from "mongoose";

const imageSchema  = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    isVerified:{
        type:String,
        required:true
    },
    mannualAnnotations: [{
        label: {
            type: String,
        },
        boundingBox: {
            topLeft: {
                x: {
                    type: Number,
                },
                y: {
                    type: Number,
                }
            },
            bottomRight: {
                x: {
                    type: Number,
                },
                y: {
                    type: Number,
                }
            }
        }
    }],
    rekognitionLabels: [{
        name: {
            type: String,
        },
        confidence: {
            type: Number,
        },
        instances: [{
            boundingBox: {
                left: {
                    type: Number,
                },
                top: {
                    type: Number,
                },
                width: {
                    type: Number,
                },
                height: {
                    type: Number,
                }
            }
        }]
    }],
    
},{timestamps:true})

export const ImageModel = mongoose.model("Image",imageSchema)