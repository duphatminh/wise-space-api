import { MongoClient } from 'mongodb'
import { env } from './environment'

//Connect đến MongoDB
export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedtopology: true,
        useNewUrlParser: true
    })
    try {
        // Kết nối client đến server
        await client.connect()
        console.log("Kết nối thành công đến Server")
        //List database 
        await listDatabase(client)
        //
    } finally {
        // Đảm bảo client sẽ đóng khi hoàn thành hoặc bug 
        await client.close()
    }
}
//Tạo hàm để list các database:
const listDatabase = async(client) => {
    const databasesList = await client.db().admin().listDatabases()
    console.log(databasesList)
    console.log('Your Databases: ')
    databasesList.databases.forEach(db => console.log(' -',db.name))
}