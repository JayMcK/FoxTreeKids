const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
// eslint-disable-next-line object-curly-spacing
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

const mailOptions = {
  from: "Fox Tree Kids",
  to: "jay_mckenzie1@outlook.com",
  subject: "New Visit Us Request",
  text: "Visit request sent successfully",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
  });
});
