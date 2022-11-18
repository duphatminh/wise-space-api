require('dotenv').config()
//Tạo env để export qua mongodb.js
export const env = {
    MONGODB_URI:process.env.MONGODB_URI,
    HOST: process.env.HOST,
    PORT: process.env.PORT
}