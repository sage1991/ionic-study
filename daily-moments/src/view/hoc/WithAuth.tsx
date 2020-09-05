import React, { ComponentType } from "react";
import { AuthContext } from "../../business/context/AuthContext";
import { Redirect } from "react-router";


const withAuth = <P extends Object> (WrappedComponent: ComponentType<P>) => (props: P) => (
  <AuthContext.Consumer>
    { ({ loggedIn }) => {

      console.log(loggedIn);
      return loggedIn ? <WrappedComponent {...props} /> : <Redirect to="/login" />;
    } }
  </AuthContext.Consumer>
);

export { withAuth };