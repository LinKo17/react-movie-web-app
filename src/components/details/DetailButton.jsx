import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

import useMultiple from "../../custom/useMultiple"
import configuration from "../../config/configuration"
import { useState } from "react"
import { useEffect } from "react"

import { Link } from "react-router-dom"


// redux section
import { useSelector, useDispatch } from 'react-redux'
import { addId } from "../../redux/favouriteSlice"
import { addWatchId } from "../../redux/watchSlice"

function DetailButton(props) {
    let { id, title } = props

    let { data, load } = useMultiple(configuration.movies.movie + `/${id}` + configuration.movies.video)

    let [video, setVideo] = useState(0)
    let [exit, setExit] = useState(false)
    let [watchExit,setWatchExit] =useState(false)

    useEffect(() => {
        if (!load) {
            let video = data.results

            if (video.length - 1 != -1) {
                setVideo(video[video.length - 1].key)
            }
        }
    }, [data, load])

    //redux section
    const fav = useSelector((state) => state.fav.value)
    const watch = useSelector(state => state.watch.value)
    const dispatch = useDispatch()

    useEffect(() => {

        let favourite = fav.find(e => e.id === id)
        let watchlater = watch.find(e => e.id == id)

        if(favourite){
            setExit(true)
        }else{
            setExit(false)
        }

        if(watchlater){
            setWatchExit(true)
        }else{
            setWatchExit(false)
        }
    })



    return (
        <div className="mt-3 mb-4 button-container">
            <div>

                {
                    video === 0 ?

                        ""
                        :

                        <Link to={`https://www.youtube.com/watch?v=${video}`}>
                            <button className="movie-detail-faPlay me-2">
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        </Link>
                }

                <button className={`me-2 ${exit ? "movie-detail-faHeart-exit" : "movie-detail-faHeart"}`} onClick={() => dispatch(addId(id))}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>

                <button className={watchExit ? "movie-detail-faCartPlus-exit" : "movie-detail-faCartPlus" } onClick={() => dispatch(addWatchId(id))}>
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                </button>
            </div>
        </div>
    )
}
export default DetailButton