import { MongoClient } from 'mongodb'
import { env } from './environment'

let dbInstance = null 

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    // Kết nối client đến server
    await client.connect()

    //Chỉ định clientDB đến dbInstance
    dbInstance = client.db(env.DATA_NAME)
}
//Tạo hàm để list các database:
// const listDatabase = async(client) => {
//     const databasesList = await client.db().admin().listDatabases()
//     console.log(databasesList)
//     console.log('Your Databases: ')
//     databasesList.databases.forEach(db => console.log(' -',db.name))
// }

// Lấy Database Instance 
export const getDB = () => {
    if (!dbInstance) throw new Error('Must connect to Database first!')
    return dbInstance
}