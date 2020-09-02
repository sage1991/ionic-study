import React, { FC } from "react";
import { RouteComponentProps, Route, Redirect } from "react-router";
import { withAuth } from "../hoc/WithAuth";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { EntryPage } from "./EntryPage";
import { SettingsPage } from "./SettingsPage";


const HomePage: FC<HomePageProps> = (props) => {
  
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/home/entry" exact component={EntryPage} />
        <Route path="/home/settings" exact component={SettingsPage} />
        <Redirect to="/home/entry" />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="entry" href="/home/entry">
          <IonIcon icon={HomeIcon}></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/home/settings">
          <IonIcon icon={SettingsIcon}></IonIcon>
          <IonLabel>settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

interface HomePageProps extends RouteComponentProps {}

const HomePageWithAuth = withAuth(HomePage);
export { HomePageWithAuth as HomePage };