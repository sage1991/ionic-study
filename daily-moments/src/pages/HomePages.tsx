import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonBackButton } from "@ionic/react";
import { entries } from "../data";
import { withAuth } from "../hoc/WithAuth";


const HomePage: FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          { entries.map(entry => <IonItem key={entry.id} button routerLink={`/entry/${entry.id}`}>{entry.title}</IonItem>) }
        </IonList>
      </IonContent>
    </IonPage>
  );
}

const HomePageWithAuth = withAuth(HomePage);
export { HomePageWithAuth as HomePage };