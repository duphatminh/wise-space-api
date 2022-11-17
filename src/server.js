import express from 'express'
import { mapOrder } from './utilities/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 7722

app.get('/',(reg, res) => {
    res.end('<h1>Hello World</h1><hr/>')
}) 

app.listen(port,hostname, () => {
    console.log('Hello ${hostname}:${port}')
})