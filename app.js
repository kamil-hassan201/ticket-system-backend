const express = require("express");
const cards = require("./db/cardNumbers");
const { deQueue, enQueue } = require("./db/cardNumbers");

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server " + cards.length);
});

app.get("/dequeue", (req, res) => {
    res.status(200);
    let item = deQueue();
    res.json(item);
});
app.get("/enqueue", (req, res) => {
    res.status(200);
    let item = enQueue();
    res.json(item);
});

app.listen(PORT, (error) => {
    if (!error)
        console.log(
            "Server is Successfully Running, and App is listening on port " +
                PORT
        );
    else console.log("Error occurred, server can't start", error);
});
