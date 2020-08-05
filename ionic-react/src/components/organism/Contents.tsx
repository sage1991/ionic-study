import React, { FC, useState } from "react";
import { IonContent, IonGrid } from "@ionic/react";
import { BmiResults } from "../molecule/BmiResults";
import { BmiControls } from "../molecule/BmiControls";
import { BmiInput } from "../molecule/BmiInput";


const INITIAL_STATE: ContentsState = { results: [], height: 0, weight: 0 };

const Contents: FC = () => {

  const [ state, setState ] = useState<ContentsState>(INITIAL_STATE);

  const calculateBMI = () => {
    if (!state.height || !state.weight) return;
    const bmi = state.weight / Math.pow(state.height, 2);
    if (isNaN(bmi)) return;
    setState({ ...state, results: [ ...state.results, +bmi.toFixed(1) ] });
  }

  const resetInputs = () => {
    setState(INITIAL_STATE);
  }

  const onHeightChange = (e: CustomEvent) => setState({ ...state, height: +e.detail.value });
  const onWeightChange = (e: CustomEvent) => setState({ ...state, weight: +e.detail.value });

  return (
    <IonContent className="ion-padding">
      <IonGrid>
        <BmiInput label="height" onChange={onHeightChange} value={state.height !== 0 ? state.height : ""} />
        <BmiInput label="weight" onChange={onWeightChange} value={state.weight !== 0 ? state.weight : ""} />
        <BmiControls calculate={calculateBMI} reset={resetInputs} />
        <BmiResults results={state.results} />
      </IonGrid>
    </IonContent>
  );
}

interface ContentsState {
  results: number[];
  height: number;
  weight: number;
}

export { Contents };