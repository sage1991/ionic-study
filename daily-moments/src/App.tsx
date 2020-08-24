import { IonApp } from '@ionic/react';
import React, { useState } from 'react';
import { AuthRouter } from './containers/AuthRouter';
import { AuthContext } from './context/AuthContext';
import { auth } from './config/Firebase';
import { LoginRouter } from './containers/LoginRouter';


const App: React.FC = () => {
  const [ isLoggedIn, setLoggedIn ] = useState<boolean>(false);

  const login = async () => {
    const credential = await auth.signInWithEmailAndPassword("harry@ionic.org", "123123");
    console.log(credential);
    setLoggedIn(true);
  }

  const logout = async () => setLoggedIn(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: isLoggedIn, login: login, logout: logout }}>
        { isLoggedIn ? <AuthRouter /> : <LoginRouter /> }
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
