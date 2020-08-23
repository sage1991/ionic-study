import React, { FC } from "react";
import { IonPage, IonContent } from "@ionic/react";


const NotFoundPage: FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        page not found
      </IonContent>
    </IonPage>
  );
}

export { NotFoundPage };