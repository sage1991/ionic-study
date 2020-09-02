import React, { FC, ComponentType, Component, ReactNode } from "react";
import { useAuth } from "../../business/hooks/UseAuth";
import { Route, Redirect, RouteComponentProps } from "react-router";


const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const { loggedIn } = useAuth();
  if (loggedIn) return <Route path={props.path} exact={props.exact} render={props.render}/>;
  return <Redirect to={props.redirect ?? "/"} />;
}


interface PrivateRouteProps {
  path: string;
  render: (props: RouteComponentProps) => ReactNode;
  redirect?: string;
  exact?: boolean;
}

export { PrivateRoute };