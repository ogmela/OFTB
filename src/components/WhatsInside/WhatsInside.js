import WhatsInsideStyles from './WhatsInside.module.scss';
import JournalPage from "../../img/fulljournalpg.jpg";
import PhotoPage from "../../img/storyphotos.jpg";
import FriendPage from "../../img/storycast.jpg";
import IndexPage from "../../img/storyindex.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const WhatsInside = () => {

    const pageArray = [
        {
            className: WhatsInsideStyles.twoPages,
            img: JournalPage,
            text: "Journal Pages: Write down the stories you'll be telling for years to come, like those iconic memories that start with 'Remember when...?', the moments that you can't think about without bursting into laughs, or the tender memories that you'll carry forever in your heart (and this book!).",
        },
        {
            className: WhatsInsideStyles.onePage,
            img: FriendPage,
            text: "Friend Profiles: Because every great story has great characters-dedicate a page to the friends who made the moments so special.",
        },
        {
            className: WhatsInsideStyles.onePage,
            img: PhotoPage,
            text:  "Little Moments, Big Memories: This is the perfect spot for those quick, unforgettable moments! Jot down your mini memories, add a photo and let the story shine.",
        },
        {
            className: WhatsInsideStyles.onePage,
            img: IndexPage,
            text: "Index Pages: A custom table of contents for your stories. Add page numbers and titles as you go so you can flip right to the good stuff later.",
        }
    ]

    return (
        <div id="whats-inside" className={WhatsInsideStyles.whatsInsideRoot}>

            <Swiper className={WhatsInsideStyles.swiper} modules={[Pagination]} slidesPerView={1} loop pagination={{ clickable: true }} cssMode style={{ '--swiper-navigation-color': 'black', '--swiper-pagination-color': 'black' }}>
                {pageArray.map((page, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className={WhatsInsideStyles.pageContent}>
                            <img src={page.img} className={page.className} alt='book page sample' />
                                <p>{page.text}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
export default WhatsInside;