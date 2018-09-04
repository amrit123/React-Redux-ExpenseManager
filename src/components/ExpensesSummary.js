import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom";
import getVisibleExpenses from "../selectors/expenseFilter";
import selectExpensesTotal from "../selectors/expense-total";

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
    const expenseText = expenseCount === 1 ? "Expense" : "Expenses";
    const formatedAmount = numeral(expenseTotal / 100).format("$0,0.00");
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount} </span>{expenseText} Totalling <span>{formatedAmount}</span></h1>
                <div className="pade-header__actions">
                <Link className="button" to="/create">Add Expense</Link><br/>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpenseSummary);
