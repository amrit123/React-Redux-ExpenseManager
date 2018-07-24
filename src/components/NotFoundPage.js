import React, { Component } from 'react'
import { Link} from "react-router-dom";
import ExpenseDashboardPage from "./ExpenseDashboardPage";


export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
      404! <Link to="/">Go home</Link>.
      </div>
    )
  }
}
