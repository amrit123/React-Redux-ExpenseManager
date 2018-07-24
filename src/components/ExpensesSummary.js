import React from "react";
import {connect} from "react-redux";
import numeral from "numeral";
import getVisibleExpenses from "../selectors/expenseFilter";
import selectExpensesTotal from "../selectors/expense-total";

const ExpenseSummary=({expenseCount , expenseTotal})=>{
const expenseText= expenseCount===1?"Expense":"Expenses";
const formatedAmount= numeral(expenseTotal/100).format("$0,0.00");
return(
<div>
<h1>Viewing {expenseCount} {expenseText} Totalling {formatedAmount}</h1>
</div>
);
}

const mapStateToProps=(state)=>{
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    return {
        expenseCount:visibleExpenses.length,
        expenseTotal:selectExpensesTotal(visibleExpenses)
    } ;
};
export default connect(mapStateToProps)(ExpenseSummary);
