import Main from "../../main/Main.jsx"

//my info
import configuration from "../../../config/configuration.js"
import useMultiple from "../../../custom/useMultiple.jsx"

import { Link } from "react-router-dom"


function TopRatedTv() {

    let { data, load } = useMultiple(configuration.tv.tv + configuration.tv.top_rated)

    return (
        <div className="my-4">
            <div className="d-flex justify-content-between mb-2">
                <span>Top Rated Tv & Series</span>

                <Link to={`/more/${"tv"}/1`} style={{color:"white",textDecoration:"none"}}>
                    <div className="pe-4">
                        More
                    </div>
                </Link>

            </div>
            <Main element={{ data, load }} />
        </div>
    )
}

export default TopRatedTv 