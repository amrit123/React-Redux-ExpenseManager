import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
export const PrivateRoute = ({ isAuthenticated, component: Component, ...remainingProps }) => (
    <Route {...remainingProps} component={(props) => (
        isAuthenticated ? (
            <div>
            <Header />
            <Component {...props} />
            </div>
           
        ) : (
                <Redirect to="/" />
                //if some one try to access the component like localhose:8080/create without logging ib, it will redirect to the login component
            )

    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid //using !! will flip the value to true or flse
});

export default connect(mapStateToProps)(PrivateRoute);