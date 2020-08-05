import React, { FC } from "react";
import { IonRow, IonCol, IonItem, IonLabel, IonInput } from "@ionic/react";


const BmiInput: FC<BmiInputProps> = (props) => (
  <IonRow>
    <IonCol>
      <IonItem>
        <IonLabel position="floating">{ props.label }</IonLabel>
        <IonInput type="number" onIonChange={props.onChange} value={props.value}></IonInput>
      </IonItem>
    </IonCol>
  </IonRow>
);

interface BmiInputProps {
  label: string;
  value?: number | string;
  onChange?: (e: CustomEvent) => void;
}

export { BmiInput };