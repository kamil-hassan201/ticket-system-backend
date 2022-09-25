const express = require("express");
const store = require("./rtk/app/store");
const cors = require("cors");
const { counterActions } = require("./rtk/features/counters/counterSlice");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
    res.status(200);
    res.send("Welcome to root URL of Server ");
});

app.get("/cards", (_req, res) => {
    res.status(200);
    const state = store.getState();
    const result = {
        serving: state.counter.top,
        last: state.counter.cards[state.counter.cards.length - 1] + 1,
    };
    res.json(result);
});

app.get("/data", (_req, res) => {
    res.status(200);
    const state = store.getState();
    const result = state.counter;
    res.json(result);
});

app.get("/counterGoOnline/:num", (req, res) => {
    res.status(200);
    const num = req.params.num;
    store.dispatch(counterActions.goOnline(num));
    console.log(store.getState().counter.counters[num - 1]);
    res.json();
});
app.get("/counterGoOffline/:num", (req, res) => {
    res.status(200);
    const num = req.params.num;
    store.dispatch(counterActions.goOffline(num));

    res.json();
});

app.get("/completeCurrent/:num", (req, res) => {
    res.status(200);
    const num = req.params.num;
    store.dispatch(counterActions.completeCurrent(num));

    res.json();
});
app.get("/callNext/:num", (req, res) => {
    res.status(200);
    const num = req.params.num - 1;
    if (store.getState().counter.top == null) {
        res.json("No cards in the queue!");
        return;
    }
    store.dispatch(counterActions.callNext(num));
    res.json();
});

app.get("/enqueue", (req, res) => {
    res.status(200);
    const state = store.getState();
    store.dispatch(counterActions.enQueue());

    const result = state.counter.cards[state.counter.cards.length - 1] + 1;
    res.json(result);
});

app.listen(PORT, (error) => {
    if (!error)
        console.log(
            "Server is Successfully Running, and App is listening on port " +
                PORT
        );
    else console.log("Error occurred, server can't start", error);
});
