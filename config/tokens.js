const jwt = require('jsonwebtoken')
require("dotenv").config({ path: "../env" });

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1d"});
  
    return token;
}

const validateToken = (token) => {
    return jwt.verify(token, SECRET)
}

module.exports={generateToken, validateToken}