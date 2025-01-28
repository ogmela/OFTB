import WelcomeCard from "./components/WelcomeCard/WelcomeCard";
import "./App.css";
import WhatsInside from "./components/WhatsInside/WhatsInside";
import YourStories from "./components/YourStories/YourStories";
import Footer from "./components/Footer/Footer";
const App = () => {
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