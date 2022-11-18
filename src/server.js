import express from 'express'
import { connectDB } from './config/mongodb.js'
import { mapOrder } from './utilities/sorts.js'
import { env } from './config/environment'

const app = express()

connectDB().catch(console.log)

app.get('/',(reg, res) => {
    res.end('<h1>Hello World</h1><hr/>')
}) 

app.listen(env.PORT,env.HOST, () => {
    console.log('Hello ',env.HOST+':'+env.PORT)
})