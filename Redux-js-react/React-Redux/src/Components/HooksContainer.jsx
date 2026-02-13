import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux";

const HookContainer = () => {


  //Inside useSelector we are going to get access to
  //our redux state and from that we are accessing pizzaBase property
  //using this state I got access to my entire State
  //here directly using use selector we get access to our redux state
  const pizzaBase = useSelector((state) => state.pizzaBase);

  //directly we get reference to dispatch function in our redux store
  const dispatch =  useDispatch()


  return (
    <div className="container">
      <h2 className="text">Number of Pizza Base Available - {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>Order Pizza</button>
    </div>
  );
};

export default HookContainer;
