const {getCollection} = require("../connect")
const db = getCollection()

async function createMessage(newMessage) {
    try {
        await db.insertOne(newMessage)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {createMessage};