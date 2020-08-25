import { IonApp, IonLoading } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { firebaseAuthAPI } from './config/Firebase';
import { ApplicationRouter } from './containers/ApplicationRouter';
import { useAuthState } from './hooks/UseAuthState';


const App: React.FC = () => {
  const { state, setState } = useAuthState();
  const setLogin = (isLoggedIn: boolean) => setState({ ...state, hasCredential: isLoggedIn });
  
  if (state.loading) return <IonLoading isOpen={true} />;
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: state.hasCredential, setLogin: setLogin }}>
        <ApplicationRouter />
      </AuthContext.Provider>
    </IonApp>
  );
};


export default App;
