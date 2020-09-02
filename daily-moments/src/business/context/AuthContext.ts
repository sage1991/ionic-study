import { createContext } from "react";

const AuthContext = createContext({ loggedIn: false, userId: "" });

export { AuthContext };