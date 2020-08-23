import React, { FC } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { HomePage } from "../pages/HomePages";
import { EntryPage } from "../pages/EntryPage";
import { SettingsPage } from "../pages/SettingsPage";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { useAuth } from "../context/AuthContext";


const ApplicationRouter: FC = () => {

  const { loggedIn } = useAuth();
  if (!loggedIn) return <Redirect to="/login" />;

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact component={HomePage} />
          <Route path="/home/:id" exact component={EntryPage} />
          <Route path="/settings" exact component={SettingsPage} />
          <Redirect to="/home" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
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