import React, { FC, useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonBackButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { RouteComponentProps } from "react-router";
import { Entry } from "../../business/model/types/Entry";
import { firestore } from "../../business/firebase/Firebase";
import { toEntry } from "../../business/model/converter/ToEntry";
import { useAuth } from "../../business/hooks/UseAuth";


const HomePage: FC<HomePageProps> = (props) => {
  const { userId } = useAuth();
  const [ entries, setEntries ] = useState<Entry[]>([]);
  
  useEffect(() => {
    const entriesCollection = firestore.collection("users").doc(userId).collection("entries");
    entriesCollection.get().then(({ docs }) => setEntries(docs.map(toEntry)));
  }, [ userId ]);

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
          { entries.map(entry => <IonItem key={entry.id} button routerLink={`/entry/${entry.id}`}>{ entry.title }</IonItem>) }
        </IonList>
      </IonContent>
    </IonPage>
  );
}


interface HomePageProps extends RouteComponentProps {

}



const HomePageWithAuth = withAuth(HomePage);
export { HomePageWithAuth as HomePage };