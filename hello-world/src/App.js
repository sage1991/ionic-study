import React, { useState } from 'react';
import { IonButton, IonToast, IonIcon, IonApp, IonHeader, IonContent, IonToolbar, IonTitle } from "@ionic/react";
import { play as playIcon } from "ionicons/icons";

let timer;
const App = () => {

  const [ state, setState ] = useState({ toast: false });
  const onClick = () => {
    setState({ toast: true });
    if (timer) clearInterval(timer);
    timer = setTimeout(() => setState({ toast: false }), 1500);
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="secondary" onClick={onClick}>
          <IonIcon icon={playIcon} slot="start" />
          Play
        </IonButton>
        <IonToast isOpen={state.toast} message="hello ionic!" />
      </IonContent>
    </IonApp>
  );
}

export { App };
