import React, { Component } from 'react'
import { BrowserRouter, Route, Switch,Link} from "react-router-dom";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import AddExpensePage from "./AddExpensePage";
import EditExpensePage from "./EditExpensePage";
import HelpPage from "./HelpPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./Header";

export default class ExpensifyAppRouters extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
          <Header />
        <Switch>
        
        <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
         <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    )
  }
}

