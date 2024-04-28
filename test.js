//const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
//const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { docClient } = require('./AWSconfig.js');
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");

//const client = new DynamoDBClient({ region: "eu-north-1" });
//const docClient = DynamoDBDocumentClient.from(client);
console.log(docClient);

const params = {
 TableName: 'users',
};

async function scanUsers(){
try {
const data = await docClient.send(new ScanCommand(params));
console.log(data.Items);
}catch(error) { 
    console.error('Error during scan:', error);
}
}

scanUsers();