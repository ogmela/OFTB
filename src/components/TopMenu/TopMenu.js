
import { useState, useRef, useEffect } from "react";
import { Sparkle, List, X } from "@phosphor-icons/react";
import BuyButton from "../BuyButton/BuyButton";
import TopMenuStyles from "./TopMenu.module.scss";
const TopMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    const menuRef = useRef(null);
    const burgerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    return (
        <div className={TopMenuStyles.topMenu}>
            {!isOpen && (<List ref={burgerRef} size={30} color="white" className={TopMenuStyles.mobileMenu} onClick={toggleMenu} />)}
            {isOpen && (<X ref={burgerRef} size={30} color="white" className={TopMenuStyles.mobileMenu} onClick={toggleMenu} />)}
            {isOpen && (
                <div ref={menuRef} className={TopMenuStyles.mobileMenuContainer}>
                    <ul className={TopMenuStyles.mobileMenu}>
                        <li><a href="#whats-inside" onClick={toggleMenu}><Sparkle weight="fill" size={20} />What's Inside</a></li>
                        <li><a href="#your-stories-matter" onClick={toggleMenu}><Sparkle weight="fill" size={20} />Your Stories Matter</a></li>
                    </ul>
                </div>

            )}
            <a className={TopMenuStyles.logo} href="#welcome"></a>
            <ul className={TopMenuStyles.menuItems}>
                <li><a href="#whats-inside"><Sparkle weight="fill" size={20} />What's Inside</a></li>
                <li><a href="#your-stories-matter"><Sparkle weight="fill" size={20} />Your Stories Matter</a></li>

            </ul>
            <div>
                <BuyButton text="Buy Yours!" variant="white" />
            </div>
        </div>
    );
}
export default TopMenu;