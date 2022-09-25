const { createSlice } = require("@reduxjs/toolkit");
const { counterActions } = require("../counters/counterSlice");

const initialState = {
    cardQue: [101],
    top: 100,
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        enQueue: (state, action) => {
            state.cardQue.push(state.cardQue[state.cardQue.length - 1] + 1);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(counterActions.callNext, (state, action) => {
            state.top = state.cardQue.shift(); // deQueue
        });
    },
});

module.exports = cardSlice.reducer;
module.exports.cardActions = cardSlice.actions;
