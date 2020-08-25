import React, { FC } from "react";
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from "@ionic/react";
import { Redirect, RouteComponentProps } from "react-router";
import { useAuth } from "../context/AuthContext";


const LoginPage: FC<LoginPageProps> = (props) => {

  const { loggedIn } = useAuth();
  if (loggedIn) return <Redirect to="/home" />;

  const onLogin = () => {
    props.onLogin(() => props.history.push("/home"));
  }

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
        <IonButton expand="block" onClick={onLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
}


interface LoginPageProps extends RouteComponentProps {
  onLogin: (func: () => void) => void;
}


export { LoginPage };