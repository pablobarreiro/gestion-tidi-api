const express = require("express");
const {login, newUser, logout, persist, changePassword, changeUsername} = require("../controllers/user");
const router = express.Router();
const { validateUser } = require("../middleware/auth");

router.post('/login', login);
router.post('/newUser', newUser);
router.post('/logout', logout);
router.get('/me', validateUser, persist);
router.put('/username', changeUsername);
router.put('/password', changePassword);
// router.put('/promote', promote)

module.exports = router