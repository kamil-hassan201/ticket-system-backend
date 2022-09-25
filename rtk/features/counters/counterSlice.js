const { createSlice } = require("@reduxjs/toolkit");
const store = require("../../app/store");

const initialState = [
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
        currentCard: 103,
    },
    {
        num: 4,
        status: "serving",
        currentCard: 104,
    },
];

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        goOffline: (state, action) => {
            state[action.payload - 1].status = "offline";
            state[action.payload - 1].currentCard = "Off Line";
        },
        goOnline: (state, action) => {
            state[action.payload - 1].status = "online";
        },
        completeCurrent: (state, action) => {
            state[action.payload - 1].status = "online";
            state[action.payload - 1].currentCard = null;
        },
        callNext: (state, action) => {
            state[action.payload].status = "serving";
            const cardState = store.getState();
            state[action.payload].currentCard = cardState.cards.top;
        },
    },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
