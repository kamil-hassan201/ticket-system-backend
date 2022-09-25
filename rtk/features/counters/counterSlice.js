const { createSlice } = require("@reduxjs/toolkit");

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
        num: 1,
        status: "notServing",
        currentCard: 103,
    },
    {
        num: 1,
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
            state[action.payload.num - 1].status = "online";
            state[action.payload.num - 1].currentCard = null;
        },
        callNext: (state, action) => {
            state[action.payload].status = "serving";
        },
    },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
