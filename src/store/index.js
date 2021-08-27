import { createStore, combineReducers } from "redux";
import ProductsReducer from "../store/reducers/productreducer";
import CartReducer from "./reducers/CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  ProductsReducer,
  CartReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
