import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/ProductReducer";
import { filterReducer } from "./reducers/FilterReducer";

const rootReducer = () =>
    combineReducers({
        productReducer: productReducer,
        filterReducer: filterReducer,
    });

const middleware = [thunk];

var store = createStore(rootReducer(), applyMiddleware(...middleware));

store.subscribe(function () {
    // console.log(store.getState());
})
export default store;