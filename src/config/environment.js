require('dotenv').config()
//Tạo env để export qua mongodb.js
export const env = {
    MONGODB_URI:process.env.MONGODB_URI,
    DATA_NAME: process.env.DATA_NAME,
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT
}