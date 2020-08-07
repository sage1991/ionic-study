import React, { FC, useState } from "react";
import { IonContent, IonGrid, IonAlert } from "@ionic/react";
import { BmiResults } from "../molecule/BmiResults";
import { BmiControls } from "../molecule/BmiControls";
import { BmiInput } from "../molecule/BmiInput";
import { UnitSegment } from "../molecule/UnitSegment";
import { Unit } from "../../business/code/Unit";


const INITIAL_STATE: ContentsState = { 
  results: [], 
  height: 0, 
  weight: 0, 
  alert: { show: false, message: "", buttons: [] },
  unit: Unit.METER_PER_KILO
};

const Contents: FC = () => {

  const [ state, setState ] = useState<ContentsState>(INITIAL_STATE);
  
  const onChangeUnit = (unit: Unit) => setState({ ...state, unit: unit });
  const onDismiss = () => setState({ ...state, alert: { ...state.alert, show: false } });
  const resetInputs = () => setState(INITIAL_STATE);
  const onHeightChange = (e: CustomEvent) => setState({ ...state, height: +e.detail.value });
  const onWeightChange = (e: CustomEvent) => setState({ ...state, weight: +e.detail.value });

  const calculateBMI = () => {
    const { weight, height, unit } = state;
    
    if (isNotValidNumber(height) || isNotValidNumber(weight)) {
      setState({ ...state, alert: { show: true, message: "please enter valid(non-zero) number!", buttons: [ { text: "Okay", handler: onDismiss } ] } });
      return;
    }

    const bmi = calculate(weight, height, unit);
    if (!isNaN(bmi)) setState({ ...state, results: [ ...state.results, +bmi.toFixed(1) ] });
  }

  return (
    <IonContent className="ion-padding">
      <IonAlert isOpen={state.alert.show} message={state.alert.message} buttons={state.alert.buttons} onDidDismiss={onDismiss} />
      <IonGrid>
        <UnitSegment onChange={onChangeUnit} default={state.unit} />
        <BmiInput label="height" onChange={onHeightChange} value={state.height !== 0 ? state.height : ""} />
        <BmiInput label="weight" onChange={onWeightChange} value={state.weight !== 0 ? state.weight : ""} />
        <BmiControls calculate={calculateBMI} reset={resetInputs} />
        <BmiResults results={state.results} />
      </IonGrid>
    </IonContent>
  );
}


const isNotValidNumber = (num: number) => {
  return !num || num <= 0;
}

const calculate = (weight: number, height: number, unit: Unit) => {

  if (unit === Unit.FEET_PER_POUND) {
    weight = weight * 2.2;
    height = height * 3.28;
  }

  return weight / Math.pow(height, 2);
}

interface ContentsState {
  results: number[];
  height: number;
  weight: number;
  alert: { show: boolean, message: string, buttons: AlertButton[] };
  unit: Unit;
}

interface AlertButton {
  text: string;
  handler: () => void;
}


export { Contents };