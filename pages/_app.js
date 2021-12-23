import { LoginContext } from "../context/LoginContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [name, setName] = useLocalStorage("name", "");
  let isAdmin = name.isAdmin;
  //console.log({ name });
  return (
    <LoginContext.Provider value={isAdmin}>
      <Component {...pageProps} />
    </LoginContext.Provider>
  );
}

export default MyApp;
