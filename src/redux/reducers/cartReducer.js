import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/ActionTypes";

export const cartReducer = (state = { items: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};
