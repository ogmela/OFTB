import LeadingLogo from "../../img/oftb-logo.png";
import OFTBook from "../../img/oftb-big.jpg";
import { Sparkle } from "@phosphor-icons/react";
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
                        <h1>
                        Capture Your Memories with One for the Books!
                        </h1>
                        <p className={WelcomeStyles.tagline}>
                        Hey There, Memory Keeper! <b>One for the Books</b> is the ultimate friendship journal designed to help you capture and preserve life’s unforgettable moments. Whether it’s the laughter-filled stories that start with “Remember when…,” heartfelt adventures, or memories you’ll cherish forever, this journal is perfect for memory-keeping, storytelling, and celebrating your closest friendships. Start creating a keepsake of your best moments today with <b>One for the Books</b>!
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
                <div className={`${WelcomeStyles["img-tape"]} ${WelcomeStyles["img-tape--2"]}`}>
                <div className={WelcomeStyles.whatsInside}><p><Sparkle weight={"fill"} size={20} />So, What's Inside?</p></div>
                </div>
            </div>

        </>
    );
};

export default WelcomeCard;