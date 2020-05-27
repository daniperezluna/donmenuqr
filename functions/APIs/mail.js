const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'infodonmenuqr@gmail.com',
        pass: '_DonMenuQr_'
    }
});
exports.sendMail = (request, response) => {
    const data = request.body;
    sendEmail(data);
    return response.status(200).end();
  
};

// Sends a email to the given user.
async function sendEmail(data) {
    const mailOptions = {
      from: 'no-reply@donmenuqr.com',
      to: 'info@donmenuqr.com',
    };
  
    mailOptions.subject = 'INFO DONMENUQR';
    mailOptions.text = `Nuevo mensaje de ${data.name} <${data.email}>: ${data.message}`;
    await smtpTransport.sendMail(mailOptions);
    console.log('New email sent');
    return null;
}