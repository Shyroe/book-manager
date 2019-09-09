import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import axiosClient from "../config/axios";

// Create new product - main function
export function createNewProductAction(product) {
  // dispatch is in charge to call the 2 actions that we have here
  return dispatch => {
    // Here I call the function that allows me to create the "newProduct"
    dispatch(newProduct());
    // Insert in the API
    axiosClient
      .post("/books", product)
      .then(response => {
        console.log(response);
        // If insert correctly
        dispatch(newProductSucces(product));
      })
      .catch(error => {
        console.log(error);
        // If there is an error
        dispatch(newProductError());
      });
  };
}

export const newProduct = () => ({
  type: ADD_PRODUCT
});

export const newProductSucces = product => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

export const newProductError = error => ({
  type: ADD_PRODUCT_ERROR
});
