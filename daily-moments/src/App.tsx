import { IonApp } from '@ionic/react';
import React, { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { firebaseAuthAPI } from './config/Firebase';
import { ApplicationRouter } from './containers/ApplicationRouter';


const App: React.FC = () => {
  const [ isLoggedIn, setLoggedIn ] = useState<boolean>(false);

  const login = async (callback: () => void) => {
    const credential = await firebaseAuthAPI.signInWithEmailAndPassword("harry@ionic.org", "123123");
    console.log(credential);
    setLoggedIn(true);
    callback();
  }

  const logout = async () => setLoggedIn(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: isLoggedIn, login: login, logout: logout }}>
        <ApplicationRouter />
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
