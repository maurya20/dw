import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { cartReducer } from "./redux/reducers";
/* MiddleWare: logger */

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[middleWare]: dispatching", action);
      const result = next(action);
      console.log("[middleWare]: nextState", store.getState());
      return result;
    };
  };
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
