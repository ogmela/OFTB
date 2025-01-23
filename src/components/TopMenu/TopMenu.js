
import { Sparkle } from "@phosphor-icons/react";
import BuyButton from "../BuyButton/BuyButton";
import TopMenuStyles from "./TopMenu.module.css";
const TopMenu = () => {
    return (
        <div className={TopMenuStyles.topMenu}>
           <a  className={TopMenuStyles.logo} href="#welcome"></a>
            <ul>
                <li><a href="#whats-inside"><Sparkle weight="fill" size={20} />What's Inside</a></li>
                <li><a><Sparkle weight="fill" size={20} />Your Stories Matter</a></li>

                </ul>  
           <div>
            <BuyButton text="Buy Yours!" variant="white" />
           </div>
        </div>
    );
}
export default TopMenu;