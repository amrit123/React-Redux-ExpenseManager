
import React from 'react'
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenseActions";

const AddExpensePage=(props)=>(

      <div>
      <h1>Add Expense</h1>
        <ExpenseForm 
        onSubmit={(expense)=>{
          console.log(expense);
      props.dispatch(startAddExpense(expense));
      props.history.push("/");
        }}
        />
      </div>
    
 
    );

    //we can also use mapdispatchtpprops to dispatch the action. it will be helpfull for testing.
    //check lecture 124 and 152 for more.
export default connect()(AddExpensePage);