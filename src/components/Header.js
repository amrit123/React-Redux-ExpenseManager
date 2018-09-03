import React from 'react'
import { NavLink} from "react-router-dom";
import {startLogout} from "../actions/authentication"
import {connect } from "react-redux";


export const Header=({startLogout})=>(
  <div>
        <h3>Expensify App</h3>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink><br/>
      
        <button onClick={startLogout}>Logout</button>
        <hr/>
      </div>
)


const mapDispatchToProps=(dispatch)=>({
  startLogout: ()=> dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);