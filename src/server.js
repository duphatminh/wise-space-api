import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environment'
import { BoardModel } from '*/models/Board.model'

connectDB()
    .then(() => console.log('Connect successfully to database server!'))
    .then(() => bootServer())
    .catch(error => {
        console.error(error)
        process.exit(1)
    })

const bootServer = () => {
    const app = express()

    app.get('/test', async (reg, res) => {
        res.end('<h1>Hello World</h1><hr/>')
    }) 
    app.listen(env.APP_PORT,env.APP_HOST, () => {
        console.log('Hello',env.APP_HOST+':'+env.APP_PORT)
    })
}