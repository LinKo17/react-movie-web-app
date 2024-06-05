import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"


//my component
import Card from "./main/Card"
import Pagination from "./main/Pagination"
import CardSkeleton from "./skeleton/CardSkeleton"

//my css
import "../css/more.css"
import Footer from "./Footer"
import useTTpage from "./main/useTTpage"


function More() {

    let { action, pgId } = useParams()
    let navigator = useNavigate()
    let [pageNum, setPageNum] = useState(pgId)
    let pages = pgId == pageNum ? pageNum : pgId
    let { data, load } = useMultiple(`/${action}` + configuration.movies.top_rated + `&page=${pages}`, pages)


    useEffect(() => {
        navigator(`/more/${action}/${pageNum}`)
    }, [pageNum])

    let [checkError, setCheckError] = useState(false)
    let {length,time} = useTTpage(`/${action}` + configuration.movies.top_rated)


    useEffect(() => {
        const isValid = /^[1-9]\d*$/.test(pgId);

        // if (!isValid) {
        //     setCheckError(true)
        // } else {

        //     if(!loading  && length.total_pages >= pgId){
        //         setCheckError(false)
        //     }else{
        //         setCheckError(true)
        //     }
        // }

        if(!time){


            if (!isValid) {
                setCheckError(true)
            } else {
                              
                if(length.total_pages >= pgId){
                    setCheckError(false)
                }else{
                    setCheckError(true)
                }

            }

        }else{
            setCheckError(false)

        }

    }, [pgId,time])

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {load ?


                        checkError ?

                            <div style={{height : "35vh"}}>

                                <h3>
                                    No Result
                                </h3>

                                <div className="mt-3">
                                    <Link to="/">
                                        <button className="btn btn-primary">Home</button>
                                    </Link>
                                </div>

                            </div>

                            :

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


                            </div>

                            <Pagination element={{pageNum,setPageNum,data,load}}/>

                        </>
                    }
                </div>
            </div >

            <Footer />
        </>
    )
}
export default More