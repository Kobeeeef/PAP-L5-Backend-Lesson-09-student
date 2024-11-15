const cors = require('cors');
const express = require('express');
const { connectToDB } = require("./connect");
const { getAllMessages } = require('./models/read-messages');
const { createNewMessage } = require('./models/create-message');
const { updateMessage } = require('./models/update-messages');
const { deleteMessage } = require('./models/delete-message');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());  // Middleware to handle JSON requests


app.get('/', (req, res) => {
    res.send("Welcome to my API home page!")
});

app.get('/:secret', async (req, res) => {
    try {
        const results = await getAllMessages(req.params.secret);
        res.send(results);
        console.log("GET request received on home page with secret");
    } catch (e) {
        console.error("Error fetching messages:", e);
        res.sendStatus(500);
    }
});


app.post('/message', async (req, res) => {
    try {
        const newMessage = req.body;
        await createNewMessage(newMessage);
        res.sendStatus(201);
        console.log("POST request received to create a new message");
    } catch (e) {
        console.error("Error creating message:", e);
        res.sendStatus(500);
    }
});


app.patch('/message/:id', async (req, res) => {
    try {
        const editedMessage = req.body;
        await updateMessage(req.params.id, editedMessage);
        res.sendStatus(200);
        console.log("PATCH request received to update a message");
    } catch (e) {
        console.error("Error updating message:", e);
        res.sendStatus(500);
    }
});

app.delete('/message/:id', async (req, res) => {
    try {
        const messageId = req.params.id;
        const results = await deleteMessage(messageId);
        res.sendStatus(200);
        console.log("DELETE request received to delete a message");
    } catch (e) {
        console.error("Error deleting message:", e);
        res.sendStatus(500);
    }
});



start()
app.listen(port, () => console.log(`Server running on port ${port}...`));

async function start() {
    try {
        await connectToDB();
    } catch (e) {
        console.error("Error connecting to database:", e);
    }
}
