import LeadingLogo from "../../img/oftb-logo.png";
import OFTBook from "../../img/oftb-big.jpg";
import { ArrowBendRightDown } from "@phosphor-icons/react";
import WelcomeStyles from "./WelcomeCard.module.scss";
import TopMenu from "../TopMenu/TopMenu";

const WelcomeCard = () => {
    return (
        <>
            <TopMenu />
            <div className={WelcomeStyles.welcomeRoot} id="welcome">
                <div className={WelcomeStyles.productContainer}>
                    <div className={WelcomeStyles.logoWrapper}>
                        <img src={LeadingLogo} className={WelcomeStyles.logo} />
                        <p className={WelcomeStyles.tagline}>
                            Hey There, Memory Keeper!
                            You know those stories that get told over and over?! The ones that start with "Remember when..." and end with everyone laughing, grinning, or feeling just a little teary-eyed? Those are the moments we live for, and <b>One for the Books</b> is here to make sure you never forget them!
                        </p>
                    </div>
                    <a
                        className={WelcomeStyles.bookContainer}
                        href=""
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <div className={WelcomeStyles.book}>
                            <img
                                alt="One For the Books"
                                src={OFTBook}
                            />
                        </div>
                    </a>
                </div>
                <div className={WelcomeStyles.whatsInside}><p>So, What's Inside?</p><ArrowBendRightDown size={32} weight="fill" className={WelcomeStyles.insideArrow} /></div>
            </div>

        </>
    );
};

export default WelcomeCard;