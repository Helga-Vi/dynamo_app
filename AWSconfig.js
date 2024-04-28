//AWS CONFIG FILE

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient} = require("@aws-sdk/lib-dynamodb");

console.log("This is aws-config file responding");

const client = new DynamoDBClient({ region: "eu-north-1" });
const docClient = DynamoDBDocumentClient.from(client);

module.exports = { client, docClient };