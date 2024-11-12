require('dotenv').config({path: '.env'});
const atlasURI = process.env.DB_CONNECTION;

const {MongoClient} = require("mongodb")

async function connectToDB() {
   global.client = new MongoClient(atlasURI)
    try {
        await client.connect()
        console.log("Connected to DB")
    } catch (err) {
        console.error(err)
    }
}
function getCollection() {
    return client.collection('users').find()
}
module.exports = { getCollection, connectToDB };
