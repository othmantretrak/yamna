import { LoginContext } from "../context/LoginContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "../styles/css/style.css";

function MyApp({ Component, pageProps }) {
  //const [name, setName] = useLocalStorage("name", "");
  //let isAdmin = name.isAdmin;
  //console.log({ name });
  return (
    <LoginContext.Provider>
      <>
        <div className="page">
          <div className="countdown-col col">
            <div className="newslatter middle">
              <h2>We Will Coming Soon</h2>
              <h4>Subscribe to get notification when we start</h4>
            </div>
            <div className="time middle">
              <span>
                <div id="days">12</div> Days
              </span>
              <span>
                <div id="hours">06</div> Hours
              </span>
              <span>
                <div id="minutes">35</div> Minutes
              </span>
              <span>
                <div id="seconds">54</div> Seconds
              </span>
            </div>
          </div>
          {/*  <div className="newsletter-col col">
            <div className="newslatter middle">
              <h2>We Will Coming Soon</h2>
              <h4>Subscribe to get notification when we start</h4>
              <form>
                <input type="text" placeholder="Enter Your Email" />
                <button type="button" className="newslatter-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </>
    </LoginContext.Provider>
  );
}

export default MyApp;
