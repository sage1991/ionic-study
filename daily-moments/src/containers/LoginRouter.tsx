import React, { FC } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { useAuth } from "../context/AuthContext";
import { LoginPage } from "../pages/LoginPage";


const LoginRouter: FC = () => {
  const { login } = useAuth();

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" exact render={(props) => <LoginPage {...props} onLogin={login} />} />
        <Redirect to="/login" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export { LoginRouter };