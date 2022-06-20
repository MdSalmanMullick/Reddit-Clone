const { check, validationResult } = require("express-validator")

exports.validateRegisterRequest = [
    check('email').isEmail().withMessage('valid email is required'),
    check('password').isLength({ min: 6, max: 20 }).withMessage("password must be between 6 and 20 characters long"),
    check('username').notEmpty().withMessage("valid username is required")
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
} 