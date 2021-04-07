import { combineReducers } from "redux";

import categoriesReducer from "./categories";
import menuReducer from "./menu";
import basket from "./basket";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  menu: menuReducer,
  basket: basket,
});

export default rootReducer;
