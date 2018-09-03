import { combineReducers } from "redux";
import expenses from "./expenses";
import filters from "./filters";
import authreducer from "./authreducer";


    const mainReducer= combineReducers({
        expenses:expenses,
        filters:filters,
        auth:authreducer
        });

   
    export default mainReducer;

    