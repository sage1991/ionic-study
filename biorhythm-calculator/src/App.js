import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonDatetime } from "@ionic/react";
import React from "react";
import { BiorhythmCard } from "./components/card/BiorhythmCard";
import { useLocalStorageState } from "./hooks/UseLocalStorageState";


const App = () => {
  const [ state, setState ] = useLocalStorageState("date", { birthDate: "", targetDate: "" });
  const { birthDate, targetDate } = state;

  const setDate = (e) => {
    const { name } = e.target;
    const { value } = e.detail;
    setState({ ...state, [ name ]: value });
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {
          targetDate && birthDate
          ? <BiorhythmCard 
              targetDay={targetDate} 
              birthDay={birthDate} />
          : null
        }
        <IonItem>
          <IonLabel position="floating">Date of Birth</IonLabel>
          <IonDatetime 
            name="birthDate"
            value={birthDate} 
            displayFormat="YYYY-MM-DD" 
            onIonChange={setDate} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">target date</IonLabel>
          <IonDatetime 
            name="targetDate"
            value={targetDate} 
            displayFormat="YYYY-MM-DD" 
            onIonChange={setDate} />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export { App };
