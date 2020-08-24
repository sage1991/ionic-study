import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import { useParams } from "react-router";
import { entries } from "../data";
import { withAuth } from "../hoc/WithAuth";


const EntryPage: FC = () => {
  const { id } = useParams<RouteParams>();
  
  const entry = entries.find(entry => entry.id === +id);
  if (!entry) throw Error(`no such id: ${id}`);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ entry.title }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { entry.description }
      </IonContent>
    </IonPage>
  );
}


interface RouteParams {
  id: string;
}


const EntryPageWithAuth = withAuth(EntryPage);
export { EntryPageWithAuth as EntryPage };