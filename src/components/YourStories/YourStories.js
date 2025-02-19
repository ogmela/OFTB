import { useRef, useEffect } from 'react';
import { Sparkle } from '@phosphor-icons/react';
import YourStoriesStyles from './YourStories.module.scss';
import OFTBLogo from "../../img/oftb-logo.png";
import BuyButton from '../BuyButton/BuyButton';
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

const YourStories = () => {
    const trackButton = (buttonName) => {
        ReactGA.event({
            category: "Purchase",
            action: "Click",
            label: buttonName,
        });
    };
    useEffect(() => emailjs.init("TuYE2TvIxHiHH3VgO"), []);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const titleRef = useRef(null);
    const storyRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceId = "service_nrh9w2j";
        const templateId = "template_w7zgrar";
        try {
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                email: emailRef.current.value,
                story_title: titleRef.current.value,
                story: storyRef.current.value,
            });
            alert("Thanks for your submission! We'll be in touch if your story is selected for the next One for the Books compilation.");
        } catch (error) {
            alert("Sorry, there was an error submitting your story. Please try again later.");
        }
    };

    return (
        <div id="your-stories-matter" className={YourStoriesStyles.yourStoriesRoot}>
            <div className={`${YourStoriesStyles["img-tape"]} ${YourStoriesStyles["img-tape--1"]}`}><p><Sparkle weight='fill' size={30} />Your Stories Matter.</p></div>
            <div className={YourStoriesStyles.storiesContainer}>
                <div className={YourStoriesStyles.storiesText}>
                    <h2>Share your unforgettable moments with us for a chance to be featured in the next <b>One for the Books</b> compilation!</h2>

                    <h3>Every friendship has moments that deserve to be celebrated—a story that sparks laughter, tears, or a warm feeling of connection. Now, it's your turn to share your story with the world! We're creating a special compilation book of the most cherished memories, and your story could be part of it.</h3>

                    <div className={YourStoriesStyles.scrapbook}>
                        <h4>How To Submit Your Story:</h4>
                        <ol>
                            <li>Think of Your Memory: Pick a story that’s truly One for the Books—a moment you’ll never forget.</li>
                            <li>Write It Out: Add all the details that make your memory special: the laughter, the heartfelt moments, and the people who made it unforgettable.</li>
                            <li>Fill out the form to send your story to us!</li>

                        </ol>
                    </div>

                </div>
                <div className={YourStoriesStyles.storiesForm}>
                    <div className={YourStoriesStyles.scrapbook}>
                        <form className={YourStoriesStyles.storyForm} method="POST" onSubmit={handleSubmit}>
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="name">Name (required):</label>
                                <input type="text" id="name" name="name" ref={nameRef} required></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="email">Email (required):</label>
                                <input type="email" id="email" name="email" ref={emailRef} required></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="Title">Story Title (optional, but encouraged!):</label>
                                <input type="text" id="title" name="title" ref={titleRef}></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>

                                <label htmlFor="story">Story (required):</label>
                                <textarea id="story" name="story" rows="4" cols="50" ref={storyRef} required></textarea>
                            </div>

                            <div className={YourStoriesStyles.formSections}>
                                <input type="checkbox" id="consent" name="consent" required></input>
                                <label htmlFor="consent"><b>I confirm that this is my original story and grant permission for it to be included in the One for the Books compilation if selected.</b></label>
                            </div>

                            <BuyButton text="Submit" type="submit" variant="black" />
                        </form>
                        <div className={YourStoriesStyles.logoWrapper}><a href='https://shop.forthebooks.co/product/oneforthebooks/' target="_blank" onClick={() => trackButton("FormLogo")}>
                            <img src={OFTBLogo} alt="One for the Books logo" />
                        </a></div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default YourStories;