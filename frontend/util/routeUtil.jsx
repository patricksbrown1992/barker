import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, logged_in, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !logged_in ? <Component {...props} /> : <Redirect to="/barks" />
    }
  />
);

const Protected = ({ component: Component, path, logged_in, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      logged_in ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const msp = (state) => ({ logged_in: Boolean(state.session.id) });
export const Authorized = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));
