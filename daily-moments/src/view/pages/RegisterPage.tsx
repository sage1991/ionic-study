import React, { FC, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonInput, IonLabel, IonText, IonLoading } from "@ionic/react";
import { firebaseAuthAPI } from "../../business/firebase/Firebase";
import { RouteComponentProps } from "react-router";

const INITIAL_STATE: RegisterPageState = {
  form: {
    email: "",
    password: ""
  },
  status: {
    error: false,
    loading: false
  }
}

const RegisterPage: FC<RegisterPageProps> = (props) => {

  const [ state, setState ] = useState<RegisterPageState>(INITIAL_STATE);

  const onRegister = async () => {
    setState({ ...state, status: { ...state.status, loading: true } });
    try {
      await firebaseAuthAPI.createUserWithEmailAndPassword(state.form.email, state.form.password);
      setState({ ...state, status: { error: false, loading: false } });
    } catch (e) {
      setState({ ...state, status: { loading: false, error: true } });
    }
  }

  const onChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setState({ ...state, form: { ...state.form, [ name ]: value } });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">email</IonLabel>
            <IonInput type="email" name="email" value={state.form.email} onIonChange={onChange} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">password</IonLabel>
            <IonInput type="password" name="password" value={state.form.password} onIonChange={onChange} />
          </IonItem>
        </IonList>
        { state.status.error ? <IonText color="danger">registeration fail</IonText> : null }
        <IonButton color="medium" expand="block" onClick={onRegister}>register</IonButton>
        <IonButton expand="block" fill="clear" onClick={() => props.history.replace("/login")}>login</IonButton>
        <IonLoading isOpen={state.status.loading} />
      </IonContent>
    </IonPage>
  );
}


interface RegisterPageProps extends RouteComponentProps {}
interface RegisterPageState {
  form: {
    email: string;
    password: string;
  };
  status: {
    loading: boolean;
    error: boolean;
  }
}


export { RegisterPage };