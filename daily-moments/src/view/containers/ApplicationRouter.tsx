import React, { FC } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Route, Redirect, Switch } from "react-router";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { EntryDetailPage } from "../pages/EntryDetailPage";
import { EntryAddPage } from "../pages/EntryAddPage";
import { BrowserRouter } from "react-router-dom";


const ApplicationRouter: FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/entry/:id" component={EntryDetailPage} />
        <Route path="/entry" exact component={EntryAddPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/404" exact component={NotFoundPage} />
        <Redirect to="/home/entry" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export { ApplicationRouter };