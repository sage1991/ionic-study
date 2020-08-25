import React, { FC } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { HomePage } from "../pages/HomePages";
import { EntryPage } from "../pages/EntryPage";
import { SettingsPage } from "../pages/SettingsPage";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { LoginPage } from "../pages/LoginPage";
import { useAuth } from "../context/AuthContext";
import css from "./ApplicationRouter.module.css";


const ApplicationRouter: FC = () => {
  const { loggedIn, login } = useAuth();
  const tabBarVisibility = loggedIn ? css.show : css.hide;
  const redirectPage = loggedIn ? "/home" : "/login";

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact component={HomePage} />
          <Route path="/entry" exact component={EntryPage} />
          <Route path="/settings" exact component={SettingsPage} />
          <Route path="/login" render={(props) => <LoginPage {...props} onLogin={login} />} />
          <Redirect to={redirectPage} />
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