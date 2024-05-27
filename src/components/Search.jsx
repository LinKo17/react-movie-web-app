import { useEffect, useRef } from "react"
import { useState } from "react"

import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"

import Loading from "./Loading"
import List from "./main/List"

import "../css/search.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SResult from "./search/SResult"


function Search() {

    const [result, setResult] = useState("")
    const dataRef = useRef()

    function formData(e) {
        e.preventDefault()
        let currentValue = dataRef.current.value
        if (currentValue.length == 0) {
            return
        }

        setResult(currentValue)
        // dataRef.current.value = " "
    }

    const { data, load } = useMultiple(configuration.search + result, result)

    const [chData, setChData] = useState([])

    useEffect(() => {
        if (!load) {
            const res = data.results.filter(e => e.media_type != "person")
            console.log(res)
            setChData({ ...data, results: res })
        }
    }, [data])

    return (
        <div className="container">

            <div className="input-container">
                <div>
                    <form onSubmit={formData}>
                        <input type="text" ref={dataRef} />
                        <button>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
            </div>

            {
                result == ""

                    ?

                    <div className="fou-con">
                        <h1>Enjoy</h1>
                    </div>

                    :

                    !load &&

                    <>
                        {

                            data.results.length != 0
                                ?
                                <List element={{ data: chData, load }} />
                                :

                                // <div className="fou-con">
                                //     <h2>
                                //         No results found for "{result.length > 15 ? result.substring(0, 15) + "..." : result}".
                                //     </h2>

                                // </div>

                                <div className="loading-style" >
                                    <Loading />
                                </div>
                        }
                    </>

            }

        </div>
    )
}
export default Search