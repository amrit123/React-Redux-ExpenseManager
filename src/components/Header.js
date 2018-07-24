import React, { Component } from 'react'
import { NavLink} from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div>
        <h3>Expensify App</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
        <hr/>
      </div>
    )
  }
}
