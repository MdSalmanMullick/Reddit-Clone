const User = require('../models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = 'secret12';
exports.register = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (user) {
            // user already exists
            return res.status(400).json({
                error: 'User with email already exists'
            })
        }
        User.findOne({ username: req.body.username }).exec(async (error, user) => {
            if (user) {
                return res.status(400).json({
                    error: 'Username already taken',
                })
            }
            //destructure the required details from the sign up request body
            const { email, password, username } = req.body;
            // encrypt password to sotre in DB
            const hashedPass = await bcrypt.hash(password, 10);
            //creating a  new user using User schema
            const newUser = new User({
                email,
                "password": hashedPass,
                username
            })
            newUser.save((error, user) => {
                jwt.sign({id:user._id}, secret, (error, token) => {
                    if(error) {
                        console.log(error);
                        res.status(500);
                    } else {
                        res.status(201).cookie('token', token).send();
                    }
                });
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong',
                        error,
                    })
                }
                return res.status(201).json(user)
            })
        })
    })
}


