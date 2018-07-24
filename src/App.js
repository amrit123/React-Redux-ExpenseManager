import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ExpensifyAppRouters from "./components/ExpensifyAppRouters";
import configureStore from "./store/configStore";
import { addExpense,removeExpense,editExpense } from "./actions/expenseActions"
import getVisibleExpenses from "./selectors/expenseFilter";
import { setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate } from "./actions/filtersActions"
import "normalize.css/normalize.css";
import "./styles/styles.scss"

const store=configureStore();



const expense1=store.dispatch(addExpense({description:"water bill",amount:5000,createdAt: -25500}));
const expense2=store.dispatch(addExpense({description:"gas bill",amount:1500,createdAt: -1000}));
const expense3=store.dispatch(addExpense({description:"Rent",amount:1000,createdAt: -5000}));

console.log(store.getState());
const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);
const jsx=(
    <Provider store={store}>
    <ExpensifyAppRouters />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));

/* 
const ExpenseDashboardPage=()=>(
        <div>
        this is homepage
        </div>
    );

const AddExpensePage=()=>(
        <div>
        this is create page
        </div>
    );

const EditExpensePage=()=>(
    <div>
        this is Edit page
        </div>
);

const HelpPage=()=>(
    <div>
        this is Help page
        </div>
);
const NotFoundPage=()=>(
    <div>
       404! <Link to="/">Go home</Link>.
        </div>
);
   
const layout=(
    <BrowserRouter>
    
    <Switch>
    
    <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route  component={NotFoundPage}/>
    </Switch>
    </BrowserRouter>
); */
    /* exact tell the router to hook for hompage  with the path "/" exactly */


