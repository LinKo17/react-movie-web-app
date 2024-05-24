import { useParams } from "react-router-dom"
import {  useState } from "react"

import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"


//my component
import Card from "./main/Card"
import Pagination from "./main/Pagination"
import CardSkeleton from "./skeleton/CardSkeleton"

//my css
import "../css/more.css"


function More() {
    let { action } = useParams()
    let [pageNum, setPageNum] = useState(1)

    let { data, load } = useMultiple(`/${action}` + configuration.movies.top_rated + `&page=${pageNum}`, pageNum)

    return (
        <div className="container my-5">
            <div className="row">
                {load ?

                    <div className="more-grid">
                        {Array.from({ length: 18 }).map((element, index) => {
                            return (
                                <div className="more-grid-container my-2" key={index}>
                                    <CardSkeleton />
                                </div>
                            )
                        })}
                    </div>

                    :
                    <>
                        <div className="more-grid">
                            {data.results.map(element => {
                                return (
                                    <div className="more-grid-container" key={element.id}>
                                        <Card element={element} />
                                    </div>
                                )
                            })}

                            {/* <input type="text" onChange={(e) => setPageNum(e.target.value)} value={pageNum} /> */}
                        </div>
                            <Pagination element={{data,load,pageNum,setPageNum}}/>

                    </>
                }
            </div>
        </div>
    )
}
export default More