const { createSlice } = require("@reduxjs/toolkit");
const store = require("../../app/store");

const initialState = {
    cards: [107],
    top: 106,
    counters: [
        {
            num: 1,
            status: "offline",
            currentCard: 101,
        },
        {
            num: 2,
            status: "serving",
            currentCard: 102,
        },
        {
            num: 3,
            status: "notServing",
            currentCard: null,
        },
        {
            num: 4,
            status: "serving",
            currentCard: 104,
        },
    ],
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        enQueue: (state, action) => {
            if (state.cards.length == 0) {
                const x = Math.floor(Math.random() * 1000 + 1);
                state.cards.push(x);
            } else {
                state.cards.push(state.cards[state.cards.length - 1] + 1);
            }
        },
        goOffline: (state, action) => {
            state.counters[action.payload - 1].status = "offline";
            // state.counters[action.payload - 1].currentCard = "Off Line";
        },
        goOnline: (state, action) => {
            if (state.counters[action.payload - 1]?.currentCard) {
                state.counters[action.payload - 1].status = "serving";
            } else {
                state.counters[action.payload - 1].status = "online";
            }
        },
        completeCurrent: (state, action) => {
            state.counters[action.payload - 1].status = "online";
            state.counters[action.payload - 1].currentCard = null;
        },
        callNext: (state, action) => {
            state.counters[action.payload].status = "serving";
            state.counters[action.payload].currentCard = state.top;
            state.top = state.cards.shift(); // deQueue
        },
    },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
