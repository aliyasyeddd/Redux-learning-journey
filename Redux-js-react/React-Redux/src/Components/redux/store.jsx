import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
//so instead of using logger middleware you can use this dev tool extension - lot of functionalities and features
import { thunk } from "redux-thunk";

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
