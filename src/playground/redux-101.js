import { createStore } from "redux";

//Action generators:functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ //we are passing object as an argument.and the default object is empty.in that case the incrementBy will be 1 by default.but  if we pass increaseBy  properties in object  as argument, the incrementBy value will replace that default value 
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const resetCount = ({ count } = {}) => ({
    type: "RESET",
    reset: count
});
const setCount = ({ count } = {}) => ({
    type: "SET",
    set: count
});

//Reducers are pure functions means the output is only based on input parameters.
const countReducers= (state = { count: 0 }, action) => { //this create the store with initial state that has count=0 value
    switch (action.type) {
        case "INCREMENT":

            return {
                count: state.count + action.incrementBy
            }
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            }
        case "RESET":
            return {
                count: action.reset
            }
        case "SET":
            return {
                count: action.set
            }
        default:
            return state;
    }
}
const store = createStore(countReducers);



//Actions=(objects that are sent to the store)

//actions tells what should happen to the current state like "i want to increase the count by 1".we can pass the action to the store by using store.dispatch() function.

store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({ incrementBy: 10 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(resetCount({ count: 0 }));
store.dispatch(setCount({ count: 100 }));






