import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { RouteComponentProps } from "react-router";


const EntryAddPage: FC<EntryAddPageProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Add Entry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

      </IonContent>
    </IonPage>
  );
}


interface EntryAddPageProps extends RouteComponentProps {}


const EntryAddPageWithAuth = withAuth(EntryAddPage);
export { EntryAddPageWithAuth as EntryAddPage };