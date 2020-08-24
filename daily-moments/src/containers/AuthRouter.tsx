import React, { FC } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { Route, Redirect } from "react-router";
import { HomePage } from "../pages/HomePages";
import { EntryPage } from "../pages/EntryPage";
import { SettingsPage } from "../pages/SettingsPage";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";


const AuthRouter: FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home" exact component={HomePage} />
        <Route path="/entry/:id" exact component={EntryPage} />
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

export { AuthRouter };