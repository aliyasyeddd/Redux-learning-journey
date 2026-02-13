import React from "react";
//it is the entry point index.js and this file is present inside redux  o
//that is the reason file name is not added
import { orderPizza } from "./redux";
import { connect } from "react-redux";

const PizzaBox = (props) => {
  //Then, inside the props, we are going to have these additional properties: pizza, base, and order pizza
  // here, I have to display how many pizzas I am having
  //whenever I click on this button, I just have to access this other pizza, which in turn dispatches this action. 
  //Once I dispatch the action, I will be going inside the store, in that I will be having reducer
  return (
    <div className="container">
      <h2 className="text">Number of Pizza Base Available - {props.pizzaBase}</h2>
      <button className="btn" onClick={props.orderPizza}>Order Pizza</button>
    </div>
  );
};

//this map state to props we will get
//access to our redux state we can easily display the value in our application


//if i'm having any additional prop inside this component we are just adding this
//two extra prop inside our component using which i able to access redux state
//  as well as i'm able to dispatch this action

// First step, using map state to props, we can get access to Redux state, and this property will
//  be passed as a prop to the component. 
const mapStateToProps = (state) => {
  return {
    pizzaBase: state.pizza.pizzaBase,
  };
};


//Then, using map dispatch to prop, we can get access to dispatch function, and then this property
//  will be passed as prop in a component
const mapDispatchToProps = (dispatch) => {
    return{
         orderPizza :()=>  dispatch(orderPizza())
    }
}


//Now, to connect both the functions from React Redux package, we are going to access this connect function, using which we are 
// connecting both the functions with a component. 
export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox);
