import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODDUCTS_ERROR,
  GET_PRODUCT_DELETED,
  PRODUCT_DELETED_SUCCESS,
  PRODUCT_DELETED_ERROR
} from "../types";

// Every reducer has their own state

const initialState = {
  products: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        error: null
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        error: null,
        products: [...state.products, action.payload]
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        error: true
      };
    case START_DOWNLOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };
    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false
      };
    case DOWNLOAD_PRODDUCTS_ERROR:
      return {
        ...state,
        products: [],
        loading: false,
        error: true
      };
    case GET_PRODUCT_DELETED:
      return {
        ...state,
        error: null
      };
    case PRODUCT_DELETED_SUCCESS:
      return {
        ...state,
        error: null,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    case PRODUCT_DELETED_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
