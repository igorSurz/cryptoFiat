const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");

dotenv.config();

exports.createJWT = (email) => {
   return jwt.sign(email, process.env.TOKEN_SECRET, {
      expiresIn: '1800'
   });
};