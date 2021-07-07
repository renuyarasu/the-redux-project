const { createStore } = require("redux")
const BUY_LAPTOP = 'BUY_LAPTOP';
// Create "initial state"
const initialState = {
    numOflaptops: 100
}

// displatch Action
const buyLaptop = () => {
    return {
        type: BUY_LAPTOP
    }
}

// Reducer -Pure function
const reducer = (state = initialState, action) => {
    // Switch Statement
    switch (action.type) {
        case BUY_LAPTOP:
            return { numOflaptops: state.numOflaptops - 1 }
        default:
            return state;
    }
}
console.clear();
// createStore
const store = createStore(reducer);
// console.log(store);
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(buyLaptop()); // { numOflaptops: 99 }
store.dispatch(buyLaptop()); // { numOflaptops: 98 }
store.dispatch(buyLaptop()); // { numOflaptops: 97 }
store.dispatch(buyLaptop()); // { numOflaptops: 96 }
store.dispatch(buyLaptop()); // { numOflaptops: 95 }
