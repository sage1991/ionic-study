import { createContext, useContext } from "react";


const AuthContext = createContext({ loggedIn: false, login: (a: any) => {}, logout: () => {} });
const useAuth = () => useContext(AuthContext);


export { AuthContext, useAuth };