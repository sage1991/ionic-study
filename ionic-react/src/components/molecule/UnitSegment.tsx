import React, { FC } from "react";
import { IonSegment, IonSegmentButton, IonLabel, IonRow, IonCol } from "@ionic/react";
import { Unit } from "../../business/code/Unit";


const SEGMENT_BUTTONS = [
  {
    label: "m/kg",
    value: Unit.METER_PER_KILO
  },
  {
    label: "ft/lbs",
    value: Unit.FEET_PER_POUND
  }
];


const UnitSegment: FC<UnitSegmentProps> = (props) => {
  const onChange = (e: CustomEvent) => { props.onChange(e.detail.value as Unit); }
  return (
    <IonRow>
      <IonCol>
        <IonSegment onIonChange={onChange} value={props.default}>
          {
            SEGMENT_BUTTONS.map((button) => (
              <IonSegmentButton value={button.value}>
                <IonLabel>{ button.label }</IonLabel>
              </IonSegmentButton>
            ))
          }
        </IonSegment>
      </IonCol>
    </IonRow>
  );
}

interface UnitSegmentProps {
  default?: Unit;
  onChange: (unit: Unit) => void;
}

export { UnitSegment };