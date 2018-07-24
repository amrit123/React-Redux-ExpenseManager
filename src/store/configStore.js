import { createStore,combineReducers } from "redux";
import mainReducer from "../reducers/combine";



export default ()=>{
    const store=createStore(mainReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};