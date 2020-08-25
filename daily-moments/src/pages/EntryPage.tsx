import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import { entries } from "../data";
import { withAuth } from "../hoc/WithAuth";
import { useQuery } from "../hooks/UseQuery";


const EntryPage: FC = () => {
  
  const query = useQuery<EntryPageQuery>();

  const entry = entries.find(entry => entry.id === +query.id);
  if (!entry) return null;

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


interface EntryPageQuery {
  [ id: string ]: string;
}


const EntryPageWithAuth = withAuth(EntryPage);
export { EntryPageWithAuth as EntryPage };