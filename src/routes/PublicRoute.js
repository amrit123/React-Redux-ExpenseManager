import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


export const PublicRoute = ({ isAuthenticated, component: Component, ...remainingProps }) => (
    <Route {...remainingProps} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />

            //if logged in redirect to dashboard page
           
        ) : (
            <Component {...props} />
             //if not logged in redirect to login component, which itself is login page
            )

    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //using !! will flip the value to true or flse
});

export default connect(mapStateToProps)(PublicRoute);