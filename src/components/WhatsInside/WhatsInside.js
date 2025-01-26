import WhatsInsideStyles from './WhatsInside.module.scss';
import JournalPage from "../../img/storypages.jpg";
import PhotoPage from "../../img/storyphotos.jpg";
import FriendPage from "../../img/storycast.jpg";
import IndexPage from "../../img/storyindex.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const WhatsInside = () => {

    const pageArray = [
        {
            img: JournalPage,
            text: "Journal Pages: Write down the stories you'll be telling for years to come, like those iconic memories that start with 'Remember when...?', the moments that you can't think about without bursting into laughs, or the tender memories that you'll carry forever in your heart (and this book!).",
            prevPage: "Index",
            nextPage: "Friend"
        },
        {
            img: FriendPage,
            text: "Friend Profiles: Because every great story has great characters-dedicate a page to the friends who made the moments so special.",
            prevPage: "Journal",
            nextPage: "Photo"
        },
        {
            img: PhotoPage,
            text: "Photo Pages: Your stories deserve visuals, too! Add photos, or anything that brings the memory to life.",
            prevPage: "Friend",
            nextPage: "Index"
        },
        {
            img: IndexPage,
            text: "Index Pages: A custom table of contents for your stories. Add page numbers and titles as you go so you can flip right to the good stuff later.",
            prevPage: "Photo",
            nextPage: "Journal"
        }
    ]

    return (
        <div id="whats-inside" className={WhatsInsideStyles.whatsInsideRoot}>
            
            <Swiper className={WhatsInsideStyles.swiper} modules={[Pagination]} slidesPerView={1} loop pagination={{ clickable: true }} cssMode style={{ '--swiper-navigation-color': 'black', '--swiper-pagination-color': 'black' }}>
                {pageArray.map((page, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={WhatsInsideStyles.pageContent}>
                                <div className={WhatsInsideStyles.pageText}>
                                    <img src={page.img} alt='journal page sample' />
                                    <p>{page.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
export default WhatsInside;