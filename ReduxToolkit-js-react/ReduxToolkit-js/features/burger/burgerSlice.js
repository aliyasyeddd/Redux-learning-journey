const { pizzaActions } = require('../pizza/pizzaSlice');
const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    burgerBuns: 200
}

const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        burger_order: (state) => {
            state.burgerBuns--;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(pizzaActions.pizza_order, (state) => {
            state.burgerBuns--;
        })
    }
})

//this is the reducer which is returned from this create slice
module.exports = burgerSlice.reducer;
module.exports.burgerActions = burgerSlice.actions;