import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import { BiorhythmCalculator } from "../../utils/BiorhythmCalculator"
import { BiorhythmChart } from "../chart/BiorhythmChart";
import { DateUtils } from "../../utils/DateUtils";
import css from "./BiorhythmCard.module.css";

const BiorhythmCard = (props) => {
  const { targetDay, birthDay } = props;
  const { physical, emotional, intellectual } = BiorhythmCalculator.calculate(birthDay, targetDay);

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{ DateUtils.formatDate(targetDay) }</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart birthDate={birthDay} endDate={targetDay} />
        <p className={css.physical}>physical: { physical.toFixed(4) }</p>
        <p className={css.emotional}>emotional: { emotional.toFixed(4) }</p>
        <p className={css.intellectual}>intellectual: { intellectual.toFixed(4) }</p>
      </IonCardContent>
    </IonCard>
  );
}


export { BiorhythmCard };