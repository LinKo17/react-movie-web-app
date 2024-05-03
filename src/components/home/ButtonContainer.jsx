//react router dom
import { Link } from "react-router-dom"

//font awesome section
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

//my info
import configuration from "../../config/configuration.js"
import useMultiple from "../../custom/useMultiple.jsx"
import { useEffect, useState } from "react"

//https://api.themoviedb.org/3/movie/1011985/videos?language=en-US&api_key=b4844965f36533bdaa743f9f5bb77237

function ButtonContainer(props) {
    let { id,title } = props

    let { data, load } = useMultiple(configuration.movies.movie + `/${id}` + configuration.movies.video)

    let [video, setVideo] = useState(0)

    useEffect(() => {
        if (!load) {
            let video = data.results

            if (video.length - 1 != -1) {
                setVideo(video[video.length - 1].key)
            }
        }
    }, [data, load])

    return (
        <div className="poster-button-group">

            {
                video == 0 ?
                    ""
                    :

                    <Link to={`https://www.youtube.com/watch?v=${video}`}>
                        <button className="poster-play-button">
                            <FontAwesomeIcon icon={faPlay} />  Play
                        </button>
                    </Link>

            }

            <Link to={`/${id}/${title}`}>
                <button className="poster-info-button">
                    <FontAwesomeIcon icon={faCircleInfo} /> More Info
                </button>
            </Link>

        </div>
    )
}
export default ButtonContainer