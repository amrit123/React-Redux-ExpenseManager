
import React, { Component } from 'react'
import ExpenseList from "./ExpenseList"
import ExpenseListFilter from "./ExpenseListFilter"
import ExpensesSummary from "./ExpensesSummary"


export default class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
      <ExpensesSummary />
      <ExpenseListFilter />
        <ExpenseList />

      </div>
    )
  }
}



