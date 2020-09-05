import React, { FC, useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon, IonLabel, IonThumbnail, IonImg, IonAvatar } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { RouteComponentProps } from "react-router";
import { Entry } from "../../business/model/types/Entry";
import { firestore } from "../../business/firebase/Firebase";
import { toEntry } from "../../business/model/converter/ToEntry";
import { useAuth } from "../../business/hooks/UseAuth";
import { add as addIcon } from "ionicons/icons";
import { formatDate } from "../../business/utils/FormatDate";


const EntryPage: FC<EntryPageProps> = () => {
  const { userId } = useAuth();
  const [ entries, setEntries ] = useState<Entry[]>([]);
  
  useEffect(() => {
    const entriesCollection = firestore.collection("users").doc(userId).collection("entries").orderBy("date", "desc");
    return entriesCollection.limit(7).onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
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
          { 
            entries.map(entry => 
              <IonItem key={entry.id} button routerLink={`/entry/${entry.id}`}>
                <IonThumbnail slot="end">
                  <IonImg src={entry.image} />
                </IonThumbnail>
                <IonLabel>
                  <h2>{ formatDate(entry.date) }</h2>
                  <h3>{ entry.title }</h3>
                </IonLabel>
              </IonItem>
            ) 
          }
        </IonList>
        <IonFab vertical="bottom" horizontal="end">
          <IonFabButton routerLink="/entry">
            <IonIcon icon={addIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}

interface EntryPageProps extends RouteComponentProps {}

const EntryPageWithAuth = withAuth(EntryPage);
export { EntryPageWithAuth as EntryPage };