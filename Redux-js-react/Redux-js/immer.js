const redux = require('redux');
const createStore = redux.createStore;
const produce=require('immer').produce;

const FILL_UPDATE = 'FILL_UPDATE';


const initialState = {
    type: "Veggie",
    ingredients: {
        bread: "Whole Grain",
        filling: "Lettuce and Tomato",
        sauce: "Mustard"
    }
};

//action creator
const updateFill = (filling) => {
    return {
        type: FILL_UPDATE,
        payload: filling//extra information that we are sending to the reducer, which is filling in this case
    }
}

//Immer will be updating this draft state, as if state is mutable.
//so in this way using immer library you dont have to worry about copying the state
//because using this immer library and using this draft copy of the state
// we are just updating the properties which has to be updated
//immer - handling immutable data
 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_UPDATE:
            return produce(state, (draft) => {
                draft.ingredients.filling = action.payload
            })
        default:
            return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());

})
store.dispatch(updateFill('Grilled Veggies and Cheese'));
unsubscribe();