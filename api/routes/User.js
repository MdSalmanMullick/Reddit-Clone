const express = require("express")
const { register } = require('../controllers/User')
const { validateRegisterRequest, isRequestValidated } = require('../validators/User')

const router = express.Router();

router.post('/register', validateRegisterRequest, isRequestValidated, register)

module.exports = router;