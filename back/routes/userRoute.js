const express = require('express');
const router = express.Router();
const { login  , getAll , createUser} = require('../controller/userCont');

// مسار تسجيل الدخول
router.post('/login', login);
router.get("/user" , getAll)
router.post("/register" , createUser)
module.exports = router;