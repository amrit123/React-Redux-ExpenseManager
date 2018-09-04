
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpenses, startRemoveExpenses } from "../actions/expenseActions";

import React, { Component } from 'react'

export class EditExpensePage extends Component {

  onEditExpense = (expense) => {
  
    this.props.dispatch(startEditExpenses(this.props.expense.id, expense));
    this.props.history.push("/");

  }

  onRemoveExpense = (expense) => {

this.props.dispatch(startRemoveExpenses({ id:this.props.expense.id }));
    
    this.props.history.push("/");

  }

  render() {
    return (
      <div>
      <div className="page-header">
      <div className="content-container">
      <div className="page-header__title">
      <h1>Edit Expense</h1>
      </div>
      </div>
      
      </div>
      <div className="content-container">
      <ExpenseForm
      expense={this.props.expense}
      onSubmit={this.onEditExpense}
    />
    <button className="button-danger" onClick={this.onRemoveExpense}> Remove Expense </button>
      </div>
       
      </div>
    )
  }
}



const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)

  };
};
export default connect(mapStateToProps)(EditExpensePage);
