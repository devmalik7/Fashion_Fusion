const Razorpay = require('razorpay');
require("dotenv").config()

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_PAY_KEY_ID,
  key_secret: process.env.RAZORPAY_PAY_KEY_SECRET,
});

module.exports = razorpayInstance;
