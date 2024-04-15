//my info
import { useEffect, useState } from "react"
import configuration from "../../config/configuration.js"
import useMultiple from "../../custom/useMultiple.jsx"

function Tag(props){

    let {id} = props
    
    let {data,load} = useMultiple(configuration.movies.movie + `/${id}`)

    let [genres,setGenres] = useState([])

    useEffect(() =>{

        if(!load){
            setGenres(data.genres)
        }

    },[data,load])

    return (
        <div className="mt-2 home-tags-container">
            {
                genres.map(element => {
                   return  <div className="home-tags" key={element.id}> {element.name}</div>
                })
            }
        </div>
    )
}

export default Tag