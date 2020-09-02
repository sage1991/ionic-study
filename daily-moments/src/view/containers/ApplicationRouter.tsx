import React, { FC } from "react";
import css from "./ApplicationRouter.module.css";
import { IonReactRouter } from "@ionic/react-router";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { HomePage } from "../pages/HomePages";
import { EntryPage } from "../pages/EntryPage";
import { SettingsPage } from "../pages/SettingsPage";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useAuth } from "../../business/hooks/UseAuth";
import { Route, Redirect, Switch } from "react-router";


const ApplicationRouter: FC = () => {
  const { loggedIn } = useAuth();
  const tabBarVisibility = loggedIn ? css.show : css.hide;
  const redirectPage = loggedIn ? "/home" : "/login";
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Switch>
            <Route path="/home" exact component={HomePage} />
            <Route path="/entry/:id" exact component={EntryPage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Redirect to={redirectPage} />
          </Switch>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className={tabBarVisibility}>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={HomeIcon}></IonIcon>
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={SettingsIcon}></IonIcon>
            <IonLabel>settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}

export { ApplicationRouter };