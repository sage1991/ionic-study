import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { firebaseAuthAPI } from "../../business/firebase/Firebase";
import { RouteComponentProps } from "react-router";


const SettingsPage: FC<SettingsPageProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="medium" expand="block" onClick={() => firebaseAuthAPI.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

interface SettingsPageProps extends RouteComponentProps {}

const SettingsPageWithAuth = withAuth(SettingsPage);
export { SettingsPageWithAuth as SettingsPage };