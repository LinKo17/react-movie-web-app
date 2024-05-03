import "../../css/main/main.css"

import Card from "./Card"

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Mousewheel } from 'swiper/modules';
import CardSkeleton from "../skeleton/CardSkeleton";


function Main(props) {
    let { data, load } = props.element

    return (
        <>
            {load ?
                <Swiper
                    cssMode={true}
                    // navigation={true}
                    mousewheel={true}
                    modules={[Navigation, Mousewheel]}
                    className="mySwiper  myCustomSwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,

                        },
                        200:{
                            slidesPerView:2
                        },
                        360:{
                            slidesPerView:3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        992: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                >

                    {Array.from({ length: 6 }).map((_, index) => {
                        return (<SwiperSlide key={index}>
                            <CardSkeleton />
                        </SwiperSlide>)

                    })}

                </Swiper>
                :
                <>

                    <Swiper
                        cssMode={true}
                        // navigation={true}
                        mousewheel={true}
                        modules={[Navigation, Mousewheel]}
                        className="mySwiper  myCustomSwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,

                            },
                            200:{
                                slidesPerView:2
                            },
                            360:{
                                slidesPerView:3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            992: {
                                slidesPerView: 5,
                            },
                            1200: {
                                slidesPerView: 6,
                            },
                        }}
                    >

                        {data.results.map(element => {
                            return (
                                <SwiperSlide key={element.id}>
                                    <Card element={element} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </>
            }
        </>
    )
}
export default Main