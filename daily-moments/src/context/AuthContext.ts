import { createContext } from "react";

const AuthContext = createContext({ loggedIn: false, setLogin: (loggedIn: boolean) => {} });

export { AuthContext };