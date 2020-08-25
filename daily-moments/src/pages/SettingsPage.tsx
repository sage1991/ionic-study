import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { firebaseAuthAPI } from "../config/Firebase";


const SettingsPage: FC = () => {
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


const SettingsPageWithAuth = withAuth(SettingsPage);
export { SettingsPageWithAuth as SettingsPage };