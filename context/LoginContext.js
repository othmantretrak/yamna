import { createContext } from "react";
const user = {
  isAuth: false,
  isAdmin: false,
};
export const LoginContext = createContext(user);
