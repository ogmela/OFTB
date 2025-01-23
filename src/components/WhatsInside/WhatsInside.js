import WhatsInsideStyles from './WhatsInside.module.scss';

const WhatsInside = () => {
    return (
        <div id="whats-inside" className={WhatsInsideStyles.whatsInsideRoot}>
            <div className={WhatsInsideStyles.grid}>
                <header>
                    <h1>Inside One for The Books</h1>
                </header>
                <figure className={`${WhatsInsideStyles["fig"]} ${WhatsInsideStyles["fig--1"]} ${WhatsInsideStyles["aspect"]}`}>
                    <img src='https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Small child playing with toys' />
                </figure>
                <p>Journal Pages: Write down the stories you'll be telling for years to come, like those iconic memories that start with "Remember when...?", the moments that you can't think about without bursting into laughs, or the tender memories that you'll carry forever in your heart (and this book!).</p>
                <figure className={`${WhatsInsideStyles["fig"]} ${WhatsInsideStyles["fig--2"]} ${WhatsInsideStyles["aspect"]}`}>
                    <img src='https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' />
                </figure>
                <p>Still Laughing About" Pages: For the moments that left you in tears of laughter. Years later, you'll still giggle just reading these pages. </p>
                <figure className={`${WhatsInsideStyles["fig"]} ${WhatsInsideStyles["fig--3"]} ${WhatsInsideStyles["aspect"]}`}>
                    <img src='https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Child reading' />
                </figure>
                <p>"I'll Always Remember" Pages: For the memories that hit your heart just right-the ones you'll carry forever. </p>
            </div>

            {/* One of each type of page, smoosh how to use and what's inside as one concept */}
            {/* Submissions for stories - email form (or just the email itself) with a blurb */}

        </div>
    );
}
export default WhatsInside;