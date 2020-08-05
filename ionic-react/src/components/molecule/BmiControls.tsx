import React, { FC } from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";


const BmiControls: FC<BmiControlsProps> = (props) => (
  <IonRow>
    <IonCol className="ion-text-left">
      <IonButton fill="solid" onClick={props.calculate}>
        <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
        Calculate
      </IonButton>
    </IonCol>
    <IonCol className="ion-text-right">
      <IonButton fill="clear" onClick={props.reset}>
        <IonIcon slot="start" icon={refreshOutline}></IonIcon>
        Reset
      </IonButton>
    </IonCol>
  </IonRow>
)

interface BmiControlsProps {
  calculate: () => void;
  reset: () => void;
}


export { BmiControls };