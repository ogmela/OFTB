
import { Sparkle } from "@phosphor-icons/react";
import BuyButton from "../BuyButton/BuyButton";
import TopMenuStyles from "./TopMenu.module.css";
const TopMenu = () => {
    return (
        <div className={TopMenuStyles.topMenu}>
           <div className={TopMenuStyles.logo} />
            <ul>
                <li><a><Sparkle weight="fill" size={20} />What's Inside</a></li>
                <li><a><Sparkle weight="fill" size={20} />How To Use</a></li>
                <li><a><Sparkle weight="fill" size={20} />Inspiration </a> </li>
                </ul>  
           <div>
            <BuyButton text="Buy Yours!" variant="white" />
           </div>
        </div>
    );
}
export default TopMenu;