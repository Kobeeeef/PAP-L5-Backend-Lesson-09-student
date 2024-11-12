const {getCollection} = require("../connect")
const db = getCollection()

async function getAllMessages(isSecret) {
    try {
        return await db.find({ isSecret: isSecret}).toArray()
    } catch (err) {
        console.log(err)
    }
}

module.exports = {getAllMessages};