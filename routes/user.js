const express = require("express");
const {login,newUser,logout,persist} = require("../controllers/user");
const router = express.Router();
const { validateToken } = require("../config/tokens");

router.post('/login', login);
router.post('/newUser', newUser);
router.post('/logout', logout);
router.get('/me', validateToken, persist);
// router.put('/promote', promote)

module.exports = router