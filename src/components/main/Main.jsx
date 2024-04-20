import "../../css/main/main.css"

import Card from "./Card"
import { Link } from "react-router-dom";

//react multi carousel
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//     superLargeDesktop: {
//         // the naming can be any, depends on you.
//         breakpoint: { max: 4000, min: 3000 },
//         items: 7
//     },
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 6
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 4
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 2
//     }
// };

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
                    {/* <Carousel
                    responsive={responsive}
                    className="main-carousel myCustomCarousel"
                >
                    {data.results.map(element => {
                        return (
                            <Card element={element} key={element.id} />
                        )
                    })}
                </Carousel> */}

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