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


