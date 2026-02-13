import { ORDER_BURGER } from "./BurgerTypes";


//if you're having multiple component and if some components are not using
// that action payload what you can do by default you can pass the value as one
export function orderBurger(number=1){
    return{
        type:ORDER_BURGER,
        payload:number
    }
}