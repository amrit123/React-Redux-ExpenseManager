import React from 'react'
import {connect } from "react-redux";
import {startLogin} from "../actions/authentication"
export const LoginPage = ({startLogin}) => (

  <div>
    <p>this is a login page</p>
    <button onClick={startLogin}>Login</button>
  </div>
) 

const mapDispatchToProps =(dispatch)=>({
  startLogin:()=>dispatch(startLogin())
}  
)
export default connect(undefined, mapDispatchToProps)(LoginPage);