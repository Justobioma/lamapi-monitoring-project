const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
//const { v4: uuidv4 } = require("uuid");
const { randomUUID } = require('crypto');

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

module.exports.submit = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}');
    const { name, message } = body;

    if (!name || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing name or message' }),
      };
    }

    const item = {
     // id: uuidv4(),
      id: randomUUID(),
      name,
      message,
      timestamp: new Date().toISOString(),
    };

    await docClient.send(new PutCommand({
      TableName: 'SubmissionTable',
      Item: item,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({
        status: 'Stored successfully',
        item,
      }),
    };
  } catch (err) {
    console.error("Error storing submission:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};