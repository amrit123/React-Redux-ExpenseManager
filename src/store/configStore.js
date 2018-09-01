import { createStore, applyMiddleware, compose } from "redux";
import mainReducer from "../reducers/combine";
import thunk from "redux-thunk";


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default ()=>{
    const store=createStore(
        mainReducer,
        composeEnhancers(applyMiddleware(thunk)) );
     
    return store;
};