import React, { ComponentType } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";


const withAuth = <P extends Object> (WrappedComponent: ComponentType<P>) => (props: P) => (
  <AuthContext.Consumer >
    { ({ loggedIn }) => loggedIn ? <WrappedComponent {...props} /> : <Redirect to="/" /> }
  </AuthContext.Consumer>
);

export { withAuth };