import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

// Create new product - main function
export function createNewProductAction(product) {
  // dispatch is in charge to call the 2 actions that we have here
  return dispatch => {
    // Here I call the function that allows me to create the "newProduct"
    dispatch(newProduct());
    dispatch(newProductSucces(product));
  };
}

export const newProduct = () => ({
  type: ADD_PRODUCT
});

export const newProductSucces = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});