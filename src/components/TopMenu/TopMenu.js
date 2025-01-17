
import BuyButton from "../BuyButton/BuyButton";
import TopMenuStyles from "./TopMenu.module.css";
const TopMenu = () => {
    return (
        <div className={TopMenuStyles.topMenu}>
           <div className={TopMenuStyles.logo} />
           <h1>"For the stories you'll always remember!"</h1>
           <div>
            <BuyButton text="Grab Yours!" variant="white" />
           </div>
        </div>
    );
}
export default TopMenu;