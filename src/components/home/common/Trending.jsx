import Main from "./../../main/Main"

//my info
import configuration from "../../../config/configuration.js"
import useMultiple from "../../../custom/useMultiple.jsx"
import ToggleButton from "../ToggleButton"
import { useEffect, useState } from "react"


function Trending() {
    let [checkTime, setCheckTime] = useState(true)
    let [trendTime, setTrendTime] = useState(configuration.trend.day)
    console.log(checkTime)

    useEffect(() => {
        setTrendTime(checkTime ? configuration.trend.day : configuration.trend.week)
    }, [checkTime, trendTime])

    let { data, load } = useMultiple(configuration.trend.trending + configuration.trend.all + trendTime + configuration.trend.others,trendTime)


    console.log(data)

    return (
        <div className="my-4">
            <div className="d-flex justify-content-between">
                <span>Trending</span>

                <div className="pe-1 mb-2">
                    <ToggleButton checkTime={checkTime} setCheckTime={setCheckTime} />
                </div>
            </div>

            <Main element={{ data, load }} />
        </div>
    )
}

export default Trending
