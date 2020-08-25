import { useState, useEffect } from "react";
import { firebaseAuthAPI } from "../config/Firebase";


const INITIAL_STATE = {
  loading: true,
  hasCredential: false,
}

const useAuthState = () => {
  const [ state, setState ] = useState<AuthState>(INITIAL_STATE);
  useEffect(() => firebaseAuthAPI.onAuthStateChanged((user) => setState({ loading: false, hasCredential: user !== null })), []);
  return { state: state, setState: setState };
}


interface AuthState {
  loading: boolean;
  hasCredential: boolean;
}
  

export { useAuthState };