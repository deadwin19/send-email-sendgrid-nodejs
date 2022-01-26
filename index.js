const dotenv = require('dotenv');
dotenv.config();

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(`${process.env.SendgridAPIKey}`);

function getMessage() {
    const body = 'This is a test email using SendGrid from Node.js';
    return {
      to: 'abc@gmail.com',
      from: 'xyz@gmail.com',
      subject: 'Test email with Node.js and SendGrid',
      text: body,
      html: `<strong>${body}</strong>`,
    };
}

async function sendEmail() {
    try {
      await sendGridMail.send(getMessage());
      console.log('Test email sent successfully');
    } catch (error) {
      console.error('Error sending test email');
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
}

sendEmail();

