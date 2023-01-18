const jwt = require('jsonwebtoken')
require("dotenv").config({ path: "../.env" });

const generateToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "30d"});
    return token;
}

const validateToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports={generateToken, validateToken}