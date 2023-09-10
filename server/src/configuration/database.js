const mongoose = require('mongoose');
require('dotenv').config();
DATABASE_URL = process.env.DATABASE_URL;
mongoose.set('strictQuery',true);
const connectDB = () => {
    mongoose.connect(DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((err) => {
        console.log("Database connection failed",err);
    })
}

module.exports = connectDB;