import React, { FC } from "react";
import { RouteComponentProps, Route, Redirect } from "react-router";
import { withAuth } from "../hoc/WithAuth";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from "@ionic/react";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { EntryPage } from "./EntryPage";
import { SettingsPage } from "./SettingsPage";


const HomePage: FC<HomePageProps> = (props) => {
  const { match } = props;

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path={`${match.url}/entry`} exact component={EntryPage} />
        <Route path={`${match.url}/settings`} exact component={SettingsPage} />
        <Redirect to={`${match.url}/entry`} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="entry" href={`${match.url}/entry`}>
          <IonIcon icon={HomeIcon}></IonIcon>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href={`${match.url}/settings`}>
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