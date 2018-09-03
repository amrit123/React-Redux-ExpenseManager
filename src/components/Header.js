import React from 'react'
import { NavLink} from "react-router-dom";
import {startLogout} from "../actions/authentication"
import {connect } from "react-redux";


export const Header=({startLogout})=>(
  <div>
        <h3>Expensify App</h3>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
        <button onClick={startLogout}>Logout</button>
        <hr/>
      </div>
)
 /* export const Header extends Component {
  render() {
    return (
      <div>
        <h3>Expensify App</h3>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/>
        <button onclick={this.startLogout}>Logout</button>
        <hr/>
      </div>
    )
  }
} */

const mapDispatchToProps=(dispatch)=>({
  startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);