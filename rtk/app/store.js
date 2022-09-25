const { configureStore } = require("@reduxjs/toolkit");
const cardReducer = require("./../features/cards/cardsSlice");
const counterReducer = require("./../features/counters/counterSlice");

const store = configureStore({
    reducer: {
        cards: cardReducer,
        counter: counterReducer,
    },
});

module.exports = store;
