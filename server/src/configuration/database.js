const mongoose = require('mongoose');
require('dotenv').config();

const dbOffline = 'mongodb://localhost:27017/campusnavigator';
DATABASE_URL = process.env.DATABASE_URL || dbOffline;
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