import "./App.css";
import ReactGA from "react-ga4";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import WhatsInside from "./components/WhatsInside/WhatsInside";
import YourStories from "./components/YourStories/YourStories";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

const TRACKING_ID = "G-TY2GQSJX16";

const App = () => {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Landing Page" });
  }, []);

  return (
    <>
      <WelcomeCard />
      <WhatsInside />
      <YourStories />
      <Footer />
    </>
  );
};

export default App;