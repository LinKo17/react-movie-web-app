import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import Loading from "../Loading"
import Noposter from "../../assets/noposter.png"
import RatingCircle from "../home/RatingCircle"
import TvActors from "./TvActors"
import TvSimilar from "./TvSimilar"
import TvYt from "./TvYt"

function TvDetail(props) {
    let { id } = props

    let { data, load } = useMultiple(configuration.details.tv + id)
    return (
        <>
            {
                load ?

                    <div className="loading-style" >
                        <Loading />
                    </div>

                    :

                    // <div className="tv-detail-container border">

                    //     <div className="tv-detail-cover-image" style={{
                    //         backgroundImage: `url(${configuration.image.original + data.backdrop_path})`
                    //     }}>
                    //     </div>

                    //     <div className="container"> {/* for middle */}

                    //         <div className="tv-detail-box">{/* for postion */}

                    //             <div className="tv-detail-flex">{/* for flex */}

                    //                 {
                    //                     data.poster_path ?
                    //                         <div className="tv-detail-image-box">
                    //                             <img src={configuration.image.w_500 + data.poster_path} />
                    //                         </div>
                    //                         :

                    //                         <div className="movie-detail-image">
                    //                             <img src={Noposter} alt="" />
                    //                         </div>
                    //                 }


                    //                 <div className="tv-detail-info-box">

                    //                     <h3>{data.name}</h3>

                    //                     <div className="tv-detail-tagline">{data.tagline || "..."}</div>

                    //                     <div className="my-2 detail-rating-tag-container">

                    //                         {
                    //                             data.vote_average != 0 ?
                    //                                 <div className="rating-cirlce-div">
                    //                                     <RatingCircle
                    //                                         rating={Math.round((data.vote_average / 10) * 100)}
                    //                                         width={"50px"}
                    //                                         height={"50px"}
                    //                                     />
                    //                                 </div>

                    //                                 :

                    //                                 ""
                    //                         }

                    //                         <div className="mt-2  ms-2 tag-div">
                    //                             <div>
                    //                                 {
                    //                                     data.genres.map(element => {
                    //                                         return <div className="home-tags" key={element.id}> {element.name}</div>
                    //                                     })
                    //                                 }
                    //                             </div>
                    //                         </div>
                    //                     </div>

                    //                     <div className="tv-detail-status my-3">

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">Status:</span>
                    //                             <span className="tv-detial-condition">{data.status || ""}</span>
                    //                         </div>

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">Number of Season:</span>
                    //                             <span className="tv-detial-condition">{data.number_of_seasons || "empty"}</span>
                    //                         </div>

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">Number of Episode:</span>
                    //                             <span className="tv-detial-condition">{data.number_of_episodes || "continue"}</span>
                    //                         </div>

                    //                     </div>

                    //                     <div className="tv-detail-status my-3">

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">Release Date:</span>
                    //                             <span className="tv-detial-condition">{data.first_air_date || ""}</span>
                    //                         </div>

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">Continue Date:</span>
                    //                             <span className="tv-detial-condition">{data.next_episode_to_air == null ?  "empty": data.next_episode_to_air.air_date}</span>
                    //                         </div>

                    //                         <div className="tv-status">
                    //                             <span className="tv-detail-min-title me-2">End Date:</span>
                    //                             <span className="tv-detial-condition">{data.last_air_date || "continue"}</span>
                    //                         </div>

                    //                     </div>


                    //                     <div className="tv-detail-overview my-3">
                    //                             <p>{data.overview}</p>
                    //                      </div>


                    //                 </div>

                    //             </div>

                    //         </div>

                    //     </div>



                    // </div>

                    <>

                        <div className="movie-detail-container">

                            <div className="movie-detail-cover-image" style={{
                                backgroundImage: `url(${configuration.image.original + data.backdrop_path})`
                            }}>
                            </div>


                            <div className="container">

                                <div className="movie-detail-info-box">

                                    <div className="movie-detail-box">

                                        {

                                            data.poster_path ?
                                                <div className="movie-detail-image">
                                                    <img src={configuration.image.w_500 + data.poster_path} alt="" />
                                                </div>
                                                :
                                                <div className="movie-detail-image">
                                                    <img src={Noposter} alt="" />
                                                </div>
                                        }

                                        <div className="movie-detail-info">

                                            <h3>{data.title || data.original_name}</h3>

                                            <div className="movie-detail-tagline">{data.tagline || "..."}</div>

                                            <div className="my-2 rating-tag-container">

                                                {
                                                    data.vote_average != 0 ?
                                                        <div className="rating-cirlce-div">
                                                            <RatingCircle
                                                                rating={Math.round((data.vote_average / 10) * 100)}
                                                                width={"50px"}
                                                                height={"50px"}
                                                            />
                                                        </div>

                                                        :

                                                        ""
                                                }

                                                <div className="mt-2  ms-2 tag-div">
                                                    <div>
                                                        {
                                                            data.genres.map(element => {
                                                                return <div className="home-tags" key={element.id}> {element.name}</div>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <DetailButton id={data.id} title={data.title} /> */}


                                            <div className="movie-detail-status my-4">

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Status:</span>
                                                    <span className="movie-detial-condition">{data.status || ""}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Number of Season:</span>
                                                    <span className="movie-detial-condition">{data.number_of_seasons || "empty"}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Number of Episode:</span>
                                                    <span className="movie-detial-condition">{data.number_of_episodes || "continue"}</span>
                                                </div>

                                            </div>

                                            <div className="movie-detail-status my-4">

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Release Date:</span>
                                                    <span className="movie-detial-condition">{data.first_air_date || ""}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Continue Date:</span>
                                                    <span className="movie-detial-condition">{data.next_episode_to_air == null ?  "empty": data.next_episode_to_air.air_date}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">End Date:</span>
                                                    <span className="movie-detial-condition">{data.last_air_date || "continue"}</span>
                                                </div>

                                            </div>

                                            <div className="movie-detail-overview my-3">
                                                <p>{data.overview}</p>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="container mt-5">
                            <TvActors id={data.id} action={"tv"} />
                            <TvYt id={data.id} />
                            <TvSimilar id={data.id} />
                        </div>

                    </>


            }

        </>
    )
}
export default TvDetail