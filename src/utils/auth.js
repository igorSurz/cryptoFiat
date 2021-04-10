const dotenv = require('dotenv');
dotenv.config();

const jwt = require("jsonwebtoken");


exports.createJWT = (email) => {
   
   return jwt.sign(email, process.env.TOKEN_SECRET, {expiresIn: '1800'});
};