import { createStore, combineReducers } from "redux";
import cartItem from './cart';

const reducers = combineReducers({cartItem})

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;