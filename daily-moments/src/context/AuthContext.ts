import { createContext, useContext } from "react";


const AuthContext = createContext({ loggedIn: false, login: () => {}, logout: () => {} });
const useAuth = () => useContext(AuthContext);


export { AuthContext, useAuth };