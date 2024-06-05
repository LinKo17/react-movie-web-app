import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../css/search.css"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"
import List from "./main/List"
import Loading from "./Loading"
import useTTpage from "./main/useTTpage"
import Pagination from "./main/Pagination"


function Search() {
    const { result, pgId } = useParams()
    const [value, setValue] = useState(result)
    let navigate = useNavigate()

    const [filterType, setFilterType] = useState(null)

    function formData(e) {
        e.preventDefault()

        if (value.length <= 0 || value == "...") {
            // navigate(`/search/result/...`)
            return
        }
        navigate(`/search/result/${value}/1`)
    }



    useEffect(() => {
        setValue(result)
    }, [result])

    // -------------------------------------------------- for pagination
    let [pageNum, setPageNum] = useState(pgId)
    let pages = pgId == pageNum ? pageNum : pgId

    useEffect(() => {
        navigate(`/search/result/${value}/${pageNum}`)
    }, [pageNum])

    let [checkError, setCheckError] = useState(false)
    let { length, time } = useTTpage(configuration.search + result)



    useEffect(() => {
        const isValid = /^[1-9]\d*$/.test(pgId);

        if (!time) {
            // console.log(length.total_pages)

            if (!isValid) {
                setCheckError(true)
            } else {

                if (length.total_pages >= pgId) {
                    setCheckError(false)
                } else {
                    setCheckError(true)
                }

            }

        } else {
            setCheckError(false)

        }

    }, [pgId, time])
    // --------------------------------------------------

    let { data, load } = useMultiple(configuration.m_search + result + `&page=${pages}`, result, pages)

    useEffect(() => {

        if (!load) {
            let firstRes = data.results.filter(e => e.media_type != "person")
            let secondRes = firstRes.filter(e => e.poster_path != null)
            setFilterType({ ...data, results: secondRes })
            // console.log(filterType)
        }

    }, [data])


    return (
        <div className="container">

            <div className="input-container">

                <div>
                    <form onSubmit={formData}>

                        <input type="text" value={value == "..." ? "" : value} onChange={e => setValue(e.target.value)} />

                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                    </form>
                </div>

            </div>

            {
                !load &&

                    result == "..."

                    ?

                    <div className="fou-con">Search & Enjoy</div>

                    :

                    filterType != null &&

                        filterType.results.length > 0 ?

                        <>
                            <List element={{ data: filterType, load }} />

                            <Pagination element={{pageNum,setPageNum,data : filterType,load}}/>

                        </>

                        :


                        checkError ?

                            <div style={{ height: "35vh" }}>

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

                            <div className="loading-con">
                                <Loading />
                            </div>

            }

        </div>
    )
}
export default Search