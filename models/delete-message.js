const { getCollection } = require("../connect");
const { ObjectId } = require('mongodb');
const db = getCollection();

async function deleteMessage(messageId) {
    try {
        const documentId = ObjectId.createFromHexString(messageId);
        return await db.deleteOne({ _id: documentId });
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = deleteMessage;
