import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {cardsReduser} from "./redusers/cardsReduser";
import {usersReduser} from "./redusers/usersReduser";

let redusers = combineReducers({
    mainPage: cardsReduser,
    usersPage: usersReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

export default store;
