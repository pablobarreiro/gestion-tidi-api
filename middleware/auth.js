const jwt = require('jsonwebtoken')
require("dotenv").config({ path: "../.env" });

const validateUser = (req,res,next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).send('Token not found')

    jwt.verify(token,process.env.JWT_SECRET, (err,payload)=> {
        if(err) return res.status(403).send('Invalid token')
        req.user = {
            id: payload.id,
            username: payload.username
        }
    });
    next();
  
    res.sendStatus(401); // Unauthorized
}

module.exports={validateUser}