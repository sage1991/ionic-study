import { createContext, useContext } from "react";


const AuthContext = createContext({ loggedIn: false });
const useAuth = () => useContext(AuthContext);


export { AuthContext, useAuth };