//AWS CONFIG FILE

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");
//require('dotenv').config();
console.log("This is aws-config file responding");

//configure the AWS SDK 

//const client = new DynamoDBClient({
    //region: process.env.AWS_REGION,
    //credentials: {
    //accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    //}
//});

const client = new DynamoDBClient({ region: "eu-north-1" });
const docClient = DynamoDBDocumentClient.from(client);

module.exports = { client, docClient };