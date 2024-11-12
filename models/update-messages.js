const {getCollection} = require("../connect")
const db = getCollection()

async function updateMessage(userName, message) {
    try {
        return await db.updateOne({ user: userName}, { $set: {message: message}})
    } catch (err) {
        console.log(err)
    }
}

module.exports = {updateMessage};