import React, { FC } from "react";
import { RouteComponentProps, Route, Redirect, Switch } from "react-router";
import { withAuth } from "../hoc/WithAuth";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonPage, IonHeader } from "@ionic/react";
import { home as HomeIcon, settings as SettingsIcon } from "ionicons/icons";
import { EntryPage } from "./EntryPage";
import { SettingsPage } from "./SettingsPage";


const HomePage: FC<HomePageProps> = (props) => {
  const { match } = props;

  return (
    <IonTabs>
      <IonPage>
        <IonHeader></IonHeader>
        <Switch>
          <Route path={`${match.url}/entry`} exact component={EntryPage} />
          <Route path={`${match.url}/settings`} exact component={SettingsPage} />
          <Redirect to={`${match.url}/entry`} />
        </Switch>
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
      </IonPage>
    </IonTabs>
  );
}

interface HomePageProps extends RouteComponentProps {}

const HomePageWithAuth = withAuth(HomePage);
export { HomePageWithAuth as HomePage };