import Main from "../../main/Main.jsx"

//my info
import configuration from "../../../config/configuration.js"
import useMultiple from "../../../custom/useMultiple.jsx"

import { Link } from "react-router-dom"

function TopRated(){

    let {data,load} = useMultiple(configuration.movies.movie + configuration.movies.top_rated)

    return (
        <div className="my-4">
            <div className="d-flex justify-content-between mb-2">
                <span>Top Rated Movies</span>

                <Link to={`/more/${"movie"}`} style={{color:"white",textDecoration:"none"}}>
                    <div className="pe-4">
                        More
                    </div>
                </Link>

            </div>
            <Main element={{data,load}}/>
        </div>
    )
}

export default TopRated 