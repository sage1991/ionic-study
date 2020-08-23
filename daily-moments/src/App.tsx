import { IonApp } from '@ionic/react';
import React, { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { ApplicationRouter } from './containers/ApplicationRouter';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Switch } from 'react-router';
import { AuthContext } from './context/AuthContext';


const App: React.FC = () => {
  const [ isLoggedIn, setLoggedIn ] = useState<boolean>(false);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: isLoggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route path="/" >
              { 
                isLoggedIn 
                ? <ApplicationRouter /> 
                : <LoginPage onLogin={() => setLoggedIn(true)} /> 
              }
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
