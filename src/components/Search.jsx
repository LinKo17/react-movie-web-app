import { useRef } from "react"
import { useState } from "react"

import useMultiple from "../custom/useMultiple"
import configuration from "../config/configuration"

import Loading from "./Loading"
import List from "./main/List"

import "../css/search.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Search() {

    const [result, setResult] = useState("")
    const dataRef = useRef()

    function formData(e) {
        e.preventDefault()
        let currentValue = dataRef.current.value
        if( currentValue.length == 0){
            return
        }

        setResult(currentValue)
        // dataRef.current.value = " "
    }

    const { data, load } = useMultiple(configuration.search + result, result)

    console.log(data)

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

            <div>
                {
                    load ?

                        <div className="loading-style" >
                            <Loading />
                        </div>
                        :

                        <>
                            {
                                data.results.length == 0
                                    ?
                                    <div className="fou-con">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </div>
                                    :
                                    <List element={{ data, load }} />
                            }
                        </>
                }
            </div>

        </div>
    )
}
export default Search