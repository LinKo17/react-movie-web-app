import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import Loading from "../Loading"
import "../../css/details/yt.css"

function Yt(props) {
    let { id } = props
    let { data, load } = useMultiple(configuration.movies.movie + "/" + id + configuration.movies.video)

    return (
        <div>
            {
                load ?

                    <div className="d-flex justify-content-center" style={{ height: "200px" }}>
                        <Loading />
                    </div>

                    :

                    <>
                        {
                            data.results.length == 0 ?

                                ""

                                :

                                <div>Trailer</div>


                        }

                        <div className="youtube-video-container">
                            {
                                data.results.map(element => {
                                    return (
                                        <div key={element.id}>
                                            {
                                                element.site == "YouTube" ?

                                                    <iframe  className="iframe" src={`https://www.youtube.com/embed/${element.key}`} title={`${element.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                                                    :


                                                    ""
                                            }

                                        </div>
                                    )
                                })
                            }
                        </div>

                    </>
            }
        </div>
    )
}

export default Yt