const express = require("express")
const env = require("dotenv").config();
const cors = require('cors')
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const ascii = require('./constants/ascii')
const bcrypt = require("bcrypt");
const User = require("./models/User");
const userRoutes = require('./routes/User')

const app = express();
app.use(cookieParser());
var whitelist = ['http://localhost:3000', /** other domains if any */]
var corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));
app.use(express.json());
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log("Database Connected") })
    .catch((error) => {
        console.log("Cannot connect database")
        console.log(error)
    });


app.get('/', (req, res) => { res.send('ok') });
app.use(userRoutes);



app.listen(process.env.PORT || 8000, () => {
    console.log(ascii);
    console.log(`Server is running on port  ${process.env.PORT || 8000}`)
});