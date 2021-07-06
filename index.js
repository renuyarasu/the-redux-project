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

// Reducer -Pure function
const reducer = (state = initialState, action){

    // Switch Statement
    switch (action.type) {
        case 'BUY_LAPTOP':
            return {numOflaptops: numOflaptops-1}    
        default:
            return state;
    }
}
