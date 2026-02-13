import { ORDER_PIZZA } from "./PizzaTypes"

const initialState = {
    pizzaBase: 1000,
}

//Once I dispatch the action, I will be going inside the store, in that I will be having reducer
//type will be matched which in turn reduces the number of pizza by 1. 
// So that is the reason whenever I click on this, I am able to reduce the number of pizza base by 1.
const pizzaReducer = (state = initialState, action) => {
    switch(action.type) {
       case ORDER_PIZZA:
        return {
            ...state,
            pizzaBase: state.pizzaBase - 1
        }
        default:
            return state
    }
}

export default pizzaReducer;