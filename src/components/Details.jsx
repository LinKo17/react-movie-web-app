import { useParams } from "react-router-dom"
import useMultiple from "../custom/useMultiple"
import Loading from "./Loading"

//css
import "../css/details.css"
import configuration from "../config/configuration";
import { useEffect, useState } from "react";
import TvDetail from "./details/TvDetail";
import MovieDetail from "./details/MovieDetail";


function Details() {
    let { id, name } = useParams();

    let [type, setType] = useState(null)
    let [correctId, setCorrectId] = useState(null)

    const { data, load } = useMultiple(configuration.search + name)


    useEffect(() => {
        if (!load) {
            let result = data.results.find(element => element.id == id)
            if (result == undefined) {
                setType(undefined)
            } else {
                setType(result.media_type)
                setCorrectId(result.id)
            }
        }
    }, [load,data])

    return (
        <>
            {
                type == null || type == undefined ?

                    <>
                        {
                            type == null ?

                                <div className="loading-style" >
                                    <Loading />
                                </div>
                
                            :

                            <h2>We will upload later</h2>

                        }
                    </>

                    :

                    <>
                        {
                            type === "tv" ?
                                <TvDetail id={correctId} />
                                :
                                <MovieDetail id={correctId} />
                        }
                    </>
            }
        </>
    )
}
export default Details