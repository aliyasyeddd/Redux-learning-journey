import "./App.css";
import PizzaBox from "./Components/PizzaBox";
import { Provider } from "react-redux";
import store from "./Components/redux/store";
import BurgerBox from "./Components/BurgerBox";
import CustomerChoice from "./Components/CustomerChoice";
import ProductsContainer from "./Components/ProductsContainer";
// import HookContainer from "./Components/HooksContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <PizzaBox />
      <BurgerBox />
      {/* <HookContainer /> */}
      {/* <CustomerChoice /> */} 
      <ProductsContainer />
    </Provider>
  );
}

export default App;
