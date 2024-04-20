import { useParams, useSearchParams } from "react-router-dom"
import { useState } from "react"

import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"


//my component
import Card from "./main/Card"

//my css
import "../css/more.css"
import CardSkeleton from "./skeleton/CardSkeleton"

import { Link } from "react-router-dom"

function More() {
    let { action } = useParams()
    let [pageNum, setPageNum] = useState(1)

    let { data, load } = useMultiple(`/${action}` + configuration.movies.top_rated + `&page=${pageNum}`)

    console.log(data)

    return (
        <div className="container my-5">
            <Link to={"/"}>
                <h1>Home</h1>
            </Link>
            <div className="row">
                {load ?

                    <div className="more-grid">
                        {Array.from({ length: 18 }).map((element,index) => {
                            return (
                                <div className="more-grid-container my-2" key={index}>
                                    <CardSkeleton/>
                                </div>
                            )
                        })}
                    </div>

                    :
                    <div className="more-grid">
                        {data.results.map(element => {
                            return (
                                <div className="more-grid-container" key={element.id}>
                                    <Card element={element} />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
export default More