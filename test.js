const store = require("./rtk/app/store");
const { counterActions } = require("./rtk/features/counters/counterSlice");

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(counterActions.completeCurrent(1));
store.dispatch(counterActions.callNext(2));
