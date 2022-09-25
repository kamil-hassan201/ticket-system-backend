const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cardQue: [100],
    top: null,
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        enQueue: (state, action) => {
            state.cardQue.push(action.payload);
        },
        deQueue: (state, action) => {
            state.top = state.cardQue.shift();
        },
    },
    extraReducers: (builder) => {
        builder.addCase();
    },
});

module.exports = cardSlice.reducer;
module.exports.cardActions = cardSlice.actions;
