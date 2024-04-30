// models/users.js

const { docClient } = require('../AWSconfig.js');
const { ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { PutCommand } = require("@aws-sdk/lib-dynamodb");
const { GetCommand } = require("@aws-sdk/lib-dynamodb");
const { DeleteCommand } = require("@aws-sdk/lib-dynamodb");

//console.log(docClient);
//console.log(ScanCommand);

const users = {
 list: async () => {
    console.log('Listing users...');
    const params = {
      TableName: 'users', 
  };

  try {
      const data = await docClient.send(new ScanCommand(params));
      return data.Items;
  } catch (error) {
      console.error('Error listing users:', error);
      throw error; // Rethrow the error to be handled by the calling function
  }
},
 get: async (key) => {
    console.log(`Getting user with key: ${key}`);
    const params = {
      TableName: 'users', // Replace 'Users' with your actual table name
      Key: {
          'email': key // Assuming 'email' is the primary key
      }
  };

  try {
      const data = await docClient.send(new GetCommand(params));
      return data.Item;
  } catch (error) {
      console.error('Error getting user:', error);
      throw error; // Rethrow the error to be handled by the calling function
  }
},
 set: async (key, value) => {
    console.log(`Setting user with key: ${key} and value: ${JSON.stringify(value)}`);
    const params = {
      TableName: 'users', // Replace 'Users' with your actual table name
      Item: {
          'email': key,
          ...value
      }
  };
  try {
      await docClient.send(new PutCommand(params));
      return { success: true };
  } catch (error) {
      console.error('Error setting user:', error);
      throw error; // Rethrow the error to be handled by the calling function
  }
},
 delete: async (email,age) => {
    console.log(`Deleting user with email: ${email}`);
    let params = {
        TableName: 'users',
        Key: {
            'email': email
        }
    };

    // If age is provided, add it to the key
    if (age !== undefined) {
        params.Key['age'] = age;
    }

  try {
      await docClient.send(new DeleteCommand(params));
      return { success: true };
  } catch (error) {
      console.error('Error deleting user:', error);
      throw error; // Rethrow the error to be handled by the calling function
  }
},
};

module.exports = users;