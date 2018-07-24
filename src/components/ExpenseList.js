import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenseFilter";

const ExpenseList=(props)=>(
    
    <div>
    <h1>Expense List</h1>
    {props.expenses.map((item)=>(
        <ExpenseListItem key={item.id} expenseItem={item}/>
    ))}
    </div>
);

const mapStateToProps=(state)=>{
    return {
        expenses:getVisibleExpenses(state.expenses,state.filters)
       
    } ;
};
export default connect(mapStateToProps)(ExpenseList);