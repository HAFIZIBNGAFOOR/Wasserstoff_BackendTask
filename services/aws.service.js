import AWS from "aws-sdk";
import dotenv from "dotenv";


dotenv.config()
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION'
});
const S3 = new AWS.S3();
const Rekognition = new AWS.Rekognition()

export const getSignedUrl = async () => {
  const Bucket = process.env.AWS_S3_ASSETS_BUCKET;
  const Key = process.env.FILE_NAME;
  const signedUrl = await S3.getSignedUrlPromise("putObject", {
    Bucket,
    Key,
    Expires: 60,
  });
  console.log("signedUrl", Bucket, Key, signedUrl);
  return signedUrl;
};

export const imageRekognition = async (imageUrl) => {
  const params = {
    Image: {
      S3Object: {
        Bucket: process.env.AWS_S3_ASSETS_BUCKET,
        Name: imageUrl
      }
    }
  };
  Rekognition.detectLabels(params, (err, data) => {
    if (err) {
      return { message: err.message, error: true }
    }
    return data.Labels
  });
}