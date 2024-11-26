const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// AWS SNS configuration with IAM role
AWS.config.region = 'ap-east-1'; 			// Replace with your AWS region
const sns = new AWS.SNS();

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // AWS SNS Publish
    await sns.publish({
      TopicArn: 'arn:aws:sns:us-east-1:361769568829:node-sns',	// Replace with your SNS TOpic ARN
      Message: message,
      Subject: subject || 'Default Subject',
    }).promise();

    res.json({ success: true, message: 'Email sent successfully! Sunil 😊' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Error sending email! Sunil!.' });
  }
});

// Default route handler serving HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
