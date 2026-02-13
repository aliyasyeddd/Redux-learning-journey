import { ORDER_BURGER } from "./BurgerTypes"

const initialState = {
    burgerBuns : 200
}

const burgerReducer=(state=initialState,action)=>{
    switch(action.type){
        case ORDER_BURGER:
            return{
                ...state,
                //payload is having the value given by customer
                burgerBuns:state.burgerBuns-action.payload
            }
        default:
            return state
    }
}
export default burgerReducer;