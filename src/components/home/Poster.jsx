//my css
import "../../css/home/poster.css"

//my info
import configuration from "../../config/configuration.js"
import useMultiple from "../../custom/useMultiple.jsx"

//swiper section
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


//my component 
import RatingCircle from "./RatingCircle.jsx";
import ButtonContainer from "./ButtonContainer.jsx";
import Tag from "./Tag.jsx";

import { useEffect, useState } from "react";

function Poster() {

    let { data, load } = useMultiple(configuration.movies.movie + configuration.movies.popular)

    let [result, setResult] = useState([])

    useEffect(() => {
        if (!load) {
            setResult(data.results)
        }
    }, [load, data])


    return (
        <div className="poster">

            {
                <Swiper
                    cssMode={true}
                    // navigation={true} //left arrow and right arrow
                    //pagination={true}`` //pagination
                    mousewheel={true}
                    //keyboard={true} //keyboard
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {result.map(element => {
                        return (
                            <SwiperSlide key={element.id}>

                                <div className="image-container">
                                    <img src={configuration.image.original + element.backdrop_path} />
                                </div>

                                <div className="post_word">

                                    <h3>{element.title}</h3>

                                    <p className="release_date">{element.release_date}</p>

                                    <div className="d-flex">


                                            <RatingCircle
                                                rating={Math.round((element.vote_average / 10) * 100)}
                                                width={"50px"}
                                                height={"50px"}
                                            />



                                            <Tag id={element.id} />


                                    </div>

                                    <div className="overview-container mb-4">
                                        <p>{element.overview}</p>
                                    </div>

                                    <ButtonContainer id={element.id} title={element.title}/>

                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            }
        </div>
    )
}

export default Poster