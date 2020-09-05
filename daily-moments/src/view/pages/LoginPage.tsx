import React, { FC, useState } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton, IonList, IonItem, IonLabel, IonInput, IonText, IonLoading } from "@ionic/react";
import { RouteComponentProps, Redirect } from "react-router";
import { auth } from "../../business/firebase/Firebase";
import { useAuth } from "../../business/hooks/UseAuth";



const INITIAL_STATE: LoginPageState = {
  form: {
    email: "",
    password: ""
  },
  status: {
    error: false,
    loading: false
  }
}

const LoginPage: FC<LoginPageProps> = (props) => {
  const [ state, setState ] = useState<LoginPageState>(INITIAL_STATE);
  const { loggedIn } = useAuth();

  const login = async () => {
    setState({ ...state, status: { ...state.status, loading: true } });

    try {
      const { email, password } = state.form;
      await auth.signInWithEmailAndPassword(email, password);
      setState({ ...state, status: { error: false, loading: false } });
    } catch (e) {
      setState({ ...state, status: { loading: false, error: true } });
    }
  }

  const onChange = (e: CustomEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setState({ ...state, form: { ...state.form, [ name ]: value } });
  }

  if (loggedIn) return <Redirect to="/home/entry" />;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Login</IonTitle>
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
            <IonInput type="password" name="password" value={state.form.password} onIonChange={onChange}  />
          </IonItem>
        </IonList>
        { state.status.error ? <IonText color="danger">Invalid Credential</IonText> : null }
        <IonButton expand="block" onClick={login}>Login</IonButton>
        <IonButton expand="block" fill="clear" onClick={() => props.history.replace("/register")}>don't have an account?</IonButton>
        <IonLoading isOpen={state.status.loading} />
      </IonContent>
    </IonPage>
  );
}


interface LoginPageProps extends RouteComponentProps {}
interface LoginPageState {
  form: {
    email: string;
    password: string;
  };
  status: {
    loading: boolean;
    error: boolean;
  }
}


export { LoginPage };