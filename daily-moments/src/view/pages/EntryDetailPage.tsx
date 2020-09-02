import React, { FC, useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { Entry } from "../../business/model/types/Entry";
import { firestore } from "../../business/firebase/Firebase";
import { toEntry } from "../../business/model/converter/ToEntry";
import { RouteComponentProps, useParams } from "react-router";
import { useAuth } from "../../business/hooks/UseAuth";


const EntryDetailPage: FC<EntryDetailPageProps> = () => {
  
  const { id } = useParams<EntryDetailPageParam>();
  const { userId } = useAuth();
  const [ entry, setEntry ] = useState<Entry>();
  
  useEffect(() => {
    if (!id) return;
    const entriesCollection = firestore.collection("users")
                                        .doc(userId)
                                        .collection("entries")
                                        .doc(id);
    entriesCollection.get().then((doc) => setEntry(toEntry(doc)));
  }, [ id, userId ]);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ entry?.title }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        { entry?.description }
      </IonContent>
    </IonPage>
  );
}


interface EntryDetailPageProps extends RouteComponentProps {}

interface EntryDetailPageParam {
  id: string;
}

const EntryDetailPageWithAuth = withAuth(EntryDetailPage);
export { EntryDetailPageWithAuth as EntryDetailPage };