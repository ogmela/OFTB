import { Sparkle } from '@phosphor-icons/react';
import YourStoriesStyles from './YourStories.module.scss';
import OFTBLogo from "../../img/oftb-logo.png";
import BuyButton from '../BuyButton/BuyButton';
const YourStories = () => {
    return (
        <div id="your-stories-matter" className={YourStoriesStyles.yourStoriesRoot}>
            <div className={`${YourStoriesStyles["img-tape"]} ${YourStoriesStyles["img-tape--1"]}`}><h1><Sparkle weight='fill' size={30} />Your Stories Matter.</h1></div>
            <div className={YourStoriesStyles.storiesContainer}>
                <div className={YourStoriesStyles.storiesText}>
                    <h2>Share your unforgettable moments with us for a chance to be featured in the next <b>One for the Books</b> compilation!</h2>

                    <h3>Every friendship has moments that deserve to be celebrated—a story that sparks laughter, tears, or a warm feeling of connection. Now, it's your turn to share your story with the world! We're creating a special compilation book of the most cherished memories, and your story could be part of it.</h3>

                    <div className={YourStoriesStyles.scrapbook}>
                        <h4>How To Submit Your Story:</h4>
                        <ol>
                            <li>Think of Your Memory: Pick a story that’s truly One for the Books—a moment you’ll never forget.</li>
                            <li>Write It Out: Add all the details that make your memory special: the laughter, the heartfelt moments, and the people who made it unforgettable.</li>
                            <li>Upload Your Story: Use the form below to submit your story. Feel free to include photos or drawings if they enhance your memory.</li>

                        </ol>
                    </div>

                </div>
                <div className={YourStoriesStyles.storiesForm}>
                    <div className={`${YourStoriesStyles.scrapbook} ${YourStoriesStyles.formScrapbook} ${YourStoriesStyles["img-tape-form"]} ${YourStoriesStyles["img-tape--1"]}`}>
                        <form className={YourStoriesStyles.storyForm} action="https://formspree.io/f/xnqoqzqz" method="POST">
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="name">Name (required):</label>
                                <input type="text" id="name" name="name" required></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="email">Email (required):</label>
                                <input type="email" id="email" name="email" required></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>
                                <label htmlFor="Title">Story Title (optional, but encouraged!):</label>
                                <input type="text" id="title" name="title"></input>
                            </div>
                            <div className={YourStoriesStyles.formSections}>

                                <label htmlFor="story">Story (required):</label>
                                <textarea id="story" name="story" rows="4" cols="50" required></textarea>
                            </div>

                            <div className={YourStoriesStyles.formSections}>
                                <input type="checkbox" id="consent" name="consent" required></input>
                                <label htmlFor="consent"><b>I confirm that this is my original story and grant permission for it to be included in the One for the Books compilation if selected.</b></label>
                            </div>

                            <BuyButton text="Submit" type="submit" variant="black" />
                        </form>
                        <div className={YourStoriesStyles.logoWrapper}><img src={OFTBLogo} alt="One for the Books logo" /></div>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default YourStories;