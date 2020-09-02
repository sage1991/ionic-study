import { IonApp, IonLoading } from '@ionic/react';
import React from 'react';
import { AuthContext } from './business/context/AuthContext';
import { ApplicationRouter } from './view/containers/ApplicationRouter';
import { useAuthState } from './business/hooks/UseAuthState';


const App: React.FC = () => {
  const { state } = useAuthState();
  if (state.loading) return <IonLoading isOpen={true} />;
  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn: state.hasCredential, userId: state.userId }}>
        <ApplicationRouter />
      </AuthContext.Provider>
    </IonApp>
  );
};


export default App;
