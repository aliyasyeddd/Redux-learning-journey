const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    pizzaBase: 1000
}

//will accept object of options
const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        //action creater
        pizza_order: (state) => {
            //taking current state as an argument
            state.pizzaBase--
        }
    }
})

console.log(pizzaSlice)

module.exports = pizzaSlice.reducer; //default exports
module.exports.pizzaActions = pizzaSlice.actions //named export