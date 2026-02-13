//1. Automatically Combining Multiple Reducers
//2. Automatically Add Thunk Middleware
//3. Automatically Setup Redux Developer Tool
const configureStore = require("@reduxjs/toolkit").configureStore
const pizzaReducer = require('../features/pizza/pizzaSlice');
const burgerReducer = require('../features/burger/burgerSlice');
const productReducer=require('../features/products/productSlice')
// const reduxLogger = require('redux-logger')
// const logger = reduxLogger.createLogger();

//invoke configure store
const store = configureStore({
    //This is where we are going to specify all the Reducers from the slices ,that belong to specific features.
    reducer: {
        pizza: pizzaReducer,
        burger: burgerReducer,
        //inside store we are including our reducer
        product: productReducer
    }, 
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


module.exports = store