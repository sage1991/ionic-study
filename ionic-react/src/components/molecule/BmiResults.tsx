import React, { FC } from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";


const BmiResults: FC<BmiResultsProps> = (props) => {
  if (props.results.length === 0) return null;
  return (
    <IonRow>
        <IonCol>
          { 
            props.results.map((bmi, index) => {
              return (
                <IonCard key={index}>
                  <IonCardContent>
                    <h3>{ bmi }</h3>
                  </IonCardContent>
                </IonCard>
              );
            }) 
          }
        </IonCol>
      </IonRow>
  );
}

interface BmiResultsProps {
  results: number[];
}

export { BmiResults };