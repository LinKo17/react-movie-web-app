import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import Loading from "../Loading"
import RatingCircle from "../home/RatingCircle"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
<FontAwesomeIcon icon="fa-solid fa-cart-plus" />


import DetailButton from "./DetailButton"
import Actors from "./Actors"
import Similar from "./Similar"
import Yt from "./Yt"

import Noposter from "../../assets/noposter.png"

function MovieDetail(props) {
    let { id } = props

    let { data, load } = useMultiple(configuration.details.movie + id)
    console.log(data)
    return (
        <>


            {
                load ?

                    <div className="loading-style" >
                        <Loading />
                    </div>

                    :

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

                                            <h3>{data.title}</h3>

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

                                            <DetailButton id={data.id} title={data.title} />


                                            <div className="movie-detail-status">

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Status:</span>
                                                    <span className="movie-detial-condition">{data.status}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Release Date:</span>
                                                    <span className="movie-detial-condition">{data.release_date}</span>
                                                </div>

                                                <div className="detail-status">
                                                    <span className="movie-detail-min-title me-2">Runtime:</span>
                                                    <span className="movie-detial-condition">{Math.floor(data.runtime / 60)}h {Math.floor(data.runtime % 60)}m</span>
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
                            <Actors id={data.id} action={"movie"} />
                            <Yt id={data.id}/>
                            <Similar id={data.id} />
                        </div>

                    </>


            }

        </>

    )
}
export default MovieDetail