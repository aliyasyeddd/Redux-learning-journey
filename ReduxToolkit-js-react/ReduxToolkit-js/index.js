const store = require('./app/store');
const { burgerActions } = require('./features/burger/burgerSlice');
const { fetchProducts } = require('./features/products/productSlice');
const pizzaActions = require('./features/pizza/pizzaSlice').pizzaActions
console.log('Initial State', store.getState())
//once the changes are done inside the store we have to unsubscribe from the store
const unsubscribe = store.subscribe(() => {
    console.log('Update State', store.getState())
})
//if we have to update anything inside store we have to dispatch action 
// store.dispatch(pizzaActions.pizza_order())
// store.dispatch(pizzaActions.pizza_order())
// store.dispatch(burgerActions.burger_order())
// store.dispatch(burgerActions.burger_order())


//.then is used because ensuring console.log runs only after the data is being fetched which
//  will be giving us the final state of the store with the updated product list
// while dispatching here we are handling promise
// inside index.js we are dispatching this action and once we run we are successfully able to get the result 
store.dispatch(fetchProducts()).then(()=>{
    console.log('Final state after update',store.getState());
    
})
unsubscribe()



 
 




