import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import RatingCircle from "../home/RatingCircle"
import noposter from "../../assets/noposter.png"
import Loading from "../Loading"

import "../../css/details/similar.css"

function Similar(props) {
    let { id } = props

    let { data, load } = useMultiple(configuration.movies.movie + "/" + id + configuration.movies.similar)
    return (
        <div className="mt-4">

            {/* ----------------------------------------- */}
            <div>
                {load ?

                    <div className="d-flex justify-content-center" style={{height:"200px"}}>
                        <Loading />
                    </div>
                    :

                    <>
                        {
                            data.results.length == 0 ?

                                ""

                                :

                                <div>Similar</div>
                        }

                        <div className="similar-main-container">
                            {
                                data.results.map(element => {
                                    return (
                                        <a href={`/${element.id}/${element.title || element.name}`} className="card-link" key={element.id}>

                                            {
                                                <div className="card-box simliar-card-box">

                                                    {
                                                        element.vote_average != 0 ?

                                                            <div className="rating-cyc-container">
                                                                <RatingCircle
                                                                    rating={Math.round((element.vote_average / 10) * 100)}
                                                                    width={"40px"}
                                                                    height={"40px"}
                                                                    fs={"11px"}
                                                                />
                                                            </div>

                                                            :

                                                            ""

                                                    }

                                                    {
                                                        element.poster_path != null ?

                                                            <img src={configuration.image.w_500 + element.poster_path} />

                                                            :
                                                            <img src={noposter} />
                                                    }

                                                    <p style={{ textDecoration: "none" }}>{element.title || element.name}</p>
                                                </div>

                                            }

                                        </a>
                                    )
                                })
                            }
                        </div>
                    </>

                }
            </div>
            {/* ----------------------------------------- */}
        </div>
    )
}
export default Similar