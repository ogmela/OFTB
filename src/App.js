import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import "./App.css";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import WhatsInside from "./components/WhatsInside/WhatsInside";
import YourStories from "./components/YourStories/YourStories";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'G-TY2GQSJX16'
    };
    TagManager.initialize(tagManagerArgs);
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