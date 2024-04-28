//AWS CONFIG FILE

const AWS=require('aws-sdk');
require('dotenv').config();
console.log("This is aws-config file responding");

//configure the AWS SDK 

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
});

const s3=new AWS.S3();
const docClient = newAWS.DynamoDB.DocumentClient();

module.exports={s3,
                docClient};