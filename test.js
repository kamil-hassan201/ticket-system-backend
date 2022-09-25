const store = require("./rtk/app/store");
const { cardActions } = require("./rtk/features/cards/cardsSlice");
const { counterActions } = require("./rtk/features/counters/counterSlice");

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(cardActions.enQueue());
// store.dispatch(counterActions.goOffline(1));
store.dispatch(counterActions.callNext(2));
