import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "../css/search.css"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"
import List from "./main/List"
import Loading from "./Loading"


function Search() {
    const { result } = useParams()
    const [value, setValue] = useState(result)
    let navigate = useNavigate()

    const [filterType, setFilterType] = useState(null)

    function formData(e) {
        e.preventDefault()

        if (value.length <= 0 || value == "...") {
            // navigate(`/search/result/...`)
            return
        }
        navigate(`/search/result/${value}`)
    }


    let { data, load } = useMultiple(configuration.search + result, result)

    // console.log(data)
    useEffect(() => {

        if (!load) {
            let firstRes = data.results.filter(e => e.media_type != "person")
            let secondRes = firstRes.filter(e => e.poster_path != null)
            setFilterType({ ...data, results: secondRes })
            console.log(filterType)
        }

    }, [data])

    console.log(result)

    useEffect(() =>{
        setValue(result)
    },[result])

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
                        <List element={{ data: filterType, load }} />
                        :

                        <div className="loading-con">
                            <Loading />
                        </div>
            }

        </div>
    )
}
export default Search