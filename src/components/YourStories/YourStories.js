import { Sparkle } from '@phosphor-icons/react';
import YourStoriesStyles from './YourStories.module.scss';
const YourStories = () => {
    return (
        <div id="your-stories-matter" className={YourStoriesStyles.yourStoriesRoot}>
            <h1><Sparkle weight='fill' size={30} />Your Stories Matter.</h1>
            <div className={YourStoriesStyles.storiesContainer}>
                <div className={YourStoriesStyles.storiesText}>
                    <h2>Share your unforgettable moments with us for a chance to be featured in the next <b>One for the Books</b> compilation</h2>

                    <h3>Every friendship has moments that deserve to be celebrated—a story that sparks laughter, tears, or a warm feeling of connection. Now, it's your turn to share your story with the world! We're creating a special compilation book of the most cherished memories, and your story could be part of it.</h3>
                    <h4>How To Submit Your Story:</h4>
                    <ol>
                        <li>Think of Your Memory: Pick a story that’s truly One for the Books—a moment you’ll never forget.</li>
                        <li>Write It Out: Add all the details that make your memory special: the laughter, the heartfelt moments, and the people who made it unforgettable.</li>
                        <li>Upload Your Story: Use the form below to submit your story. Feel free to include photos or drawings if they enhance your memory.</li>

                    </ol>
                </div>
                <div className={YourStoriesStyles.storiesForm}>
                    <form>
                        <div>
                            <label for="name">Name (required):</label>
                            <input type="text" id="name" name="name" required></input>
                        </div>
                        <div>
                            <label for="email">Email (required):</label>
                            <input type="email" id="email" name="email" required></input>
                        </div>
                        <div>
                        <label for="Title">Story Title (optional, but encouraged!):</label>
                            <input type="text" id="title" name="title"></input>
                        </div>
                        <div>

                            <label for="story">Story (required):</label>
                            <textarea id="story" name="story" rows="4" cols="50" required></textarea>
                        </div>

                       <div>
                       <input type="checkbox" id="consent" name="consent" required></input>
                       <label for="consent">I confirm that this is my original story and grant permission for it to be included in the One for the Books compilation if selected.</label>
                       </div>
                        
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>


        </div>
    );
}
export default YourStories;