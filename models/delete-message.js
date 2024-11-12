const {getCollection} = require("../connect")
const db = getCollection()

async function deleteMessage(fieldId, valueId) {
    try {
        return await db.deleteOne({ fieldId: valueId})
    } catch (err) {
        console.log(err)
    }
}

module.exports = {deleteMessage};