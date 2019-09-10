import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import validationReducer from "./validationReducer";

export default combineReducers({
  products: productReducer,
  error: validationReducer
});
