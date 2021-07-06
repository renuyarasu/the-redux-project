const { createStore } = require("redux")

// Create "initial state"
const initialState = {
    numOflaptops: 100
}

// displatch Action
const buyLaptop = () => {
    return {
        type: 'BUY_LAPTOP'
    }
}