
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenseActions";

import React, { Component } from 'react'

export  class AddExpensePage extends Component {

  onSubmit = (expense)=>{
  this.props.dispatch(startAddExpense(expense));
  this.props.history.push("/");
  };
  render() {
    return (
      <div>
      <div className="page-header">
      <div className="content-container">
      <div className="page-header__title">
      <h1>Add Expense</h1>
      </div>
      </div>
      
      </div>
      <div className="content-container">
      <ExpenseForm 
      onSubmit={this.onSubmit}
      />
      </div>
       
      </div>
    )
  }
}




    //we can also use mapdispatchtpprops to dispatch the action. it will be helpfull for testing.
    //check lecture 124 and 152 for more.
export default connect()(AddExpensePage);