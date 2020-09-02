import { useState, useEffect } from "react";
import { firebaseAuthAPI } from "../firebase/Firebase";


const INITIAL_STATE = {
  userId: "",
  loading: true,
  hasCredential: false,
}

const useAuthState = () => {
  const [ state, setState ] = useState<AuthState>(INITIAL_STATE);
  useEffect(() => firebaseAuthAPI.onAuthStateChanged((user) => setState({ loading: false, userId: user ? user.uid : "", hasCredential: user !== null })), []);
  return { state: state, setState: setState };
}


interface AuthState {
  userId: string;
  loading: boolean;
  hasCredential: boolean;
}
  

export { useAuthState };