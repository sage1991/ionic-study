import React, { FC } from "react";
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react";


const Header: FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export { Header };