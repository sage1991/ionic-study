import React, { FC, useState, ChangeEvent, useEffect, useRef } from "react";
import { 
  IonPage, IonHeader, IonToolbar, 
  IonTitle, IonContent, IonButtons, 
  IonBackButton, IonList, IonItem, 
  IonLabel, IonInput, IonTextarea, 
  IonButton, IonDatetime, IonImg, isPlatform 
} from "@ionic/react";
import { withAuth } from "../hoc/WithAuth";
import { RouteComponentProps } from "react-router";
import { firestore, storage } from "../../business/firebase/Firebase";
import { useAuth } from "../../business/hooks/UseAuth";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";


const INIT_STATE = {
  title: "",
  description: "",
  date: "",
  image: "/assets/placeholder.png",
}

const saveImage = async (userId: string, blobUrl: string) => {
  const pictureStorage = storage.ref(`/users/${userId}/picture/${Date.now()}`);
  const response = await fetch(blobUrl);
  const blob = await response.blob();
  const snapshot = await pictureStorage.put(blob);
  return await snapshot.ref.getDownloadURL();
}


const EntryAddPage: FC<EntryAddPageProps> = (props) => {
  const { userId } = useAuth();
  const [ state, setState ] = useState<EntryAddPageState>(INIT_STATE);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => () => {
    if (state.image.indexOf("blob:")) URL.revokeObjectURL(state.image);
  }, [ state.image ]);



  const saveEntry = async () => {
    const firestoreEntries = firestore.collection("users").doc(userId).collection("entries");
    const entry = { ...state };
    
    if (entry.image !== INIT_STATE.image) entry.image = await saveImage(userId, entry.image);
    await firestoreEntries.add(entry);
    props.history.goBack();
  }

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || !files.length) return setState({ ...state, image: INIT_STATE.image });
    const file = files[0];
    const picture = URL.createObjectURL(file);
    setState({ ...state, image: picture });
  }

  const onPictureClick = async () => {
    if (!isPlatform("capacitor")) return fileInputRef.current?.click();
    
    try {
      const { Camera } = Plugins;
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        width: 600,
        height: 600
      });
      setState({ ...state, image: photo.webPath! });
    } catch (e) {
      console.log("error: ", e);
    }
  }

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
        <IonList>
        <IonItem>
            <IonLabel position="floating">date</IonLabel>
            <IonDatetime 
              name="date" 
              displayFormat="YYYY. MM. DD	"
              value={state.date} 
              onIonChange={e => setState({ ...state, date: e.detail.value! })} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">title</IonLabel>
            <IonInput
              name="title" 
              value={state.title} 
              onIonChange={e => setState({ ...state, title: e.detail.value! })} />
          </IonItem>
          <IonItem button>
            <IonLabel position="floating">picture</IonLabel>
            <br/><br/>
            <input ref={fileInputRef} hidden type="file" accept="image/*" onChange={onFileChange} />
            <IonImg src={state.image} alt="file image" onClick={onPictureClick} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">description</IonLabel>
            <IonTextarea 
              name="description"
              value={state.description} 
              onIonChange={e => setState({ ...state, description: e.detail.value! })} />
          </IonItem>
          <IonButton expand="block" onClick={saveEntry}>save</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
}


interface EntryAddPageProps extends RouteComponentProps {}
interface EntryAddPageState {
  title: string;
  description: string;
  date: string;
  image: string;
}

const EntryAddPageWithAuth = withAuth(EntryAddPage);
export { EntryAddPageWithAuth as EntryAddPage };