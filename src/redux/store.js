import {createStore, combineReducers} from "redux";
import {cardsReduser} from "./redusers/cardsReduser";

let redusers = combineReducers({
    mainPage: cardsReduser
});

let store = createStore(redusers);

export default store;