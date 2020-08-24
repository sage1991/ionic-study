import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";


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
      </IonContent>
    </IonPage>
  );
}


const SettingsPageWithAuth = withAuth(SettingsPage);
export { SettingsPageWithAuth as SettingsPage };