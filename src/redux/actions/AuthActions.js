import { ADD_TO_CART, DELETE_FROM_CART } from "./ActionTypes";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const deleteFromCart = (data) => {
  return {
    type: DELETE_FROM_CART,
    payload: data,
  };
};
