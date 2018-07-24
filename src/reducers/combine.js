import { createStore,combineReducers } from "redux";
import expenses from "./expenses";
import filters from "./filters";


    const mainReducer= combineReducers({
        expenses,
        filters
        });

   
    export default mainReducer;

    