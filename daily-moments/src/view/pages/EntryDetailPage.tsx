import React, { FC, useState, useEffect } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonIcon } from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { Entry } from "../../business/model/types/Entry";
import { firestore } from "../../business/firebase/Firebase";
import { toEntry } from "../../business/model/converter/ToEntry";
import { RouteComponentProps, useParams } from "react-router";
import { useAuth } from "../../business/hooks/UseAuth";
import { trash as trashIcon } from "ionicons/icons";
import { formatDate } from "../../business/utils/FormatDate";


const EntryDetailPage: FC<EntryDetailPageProps> = (props) => {
  
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


  const deleteEntry = async () => {
    if (!id) return;
    const firestoreEntry = firestore.collection("users").doc(userId).collection("entries").doc(id);
    await firestoreEntry.delete();
    props.history.goBack();
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{ entry ? formatDate(entry.date) : "" }</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={deleteEntry}>
              <IonIcon icon={trashIcon} slot="icon-only"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h3>{ entry?.title }</h3>
        <img src={entry?.image} alt={entry?.title} />
        <p>{ entry?.description }</p>
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