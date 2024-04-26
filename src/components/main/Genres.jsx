import { useState } from "react"
import "../../css/main/genres.css"

function Genres(props) {
    const {data,load,setGenreId} = props
    const [activeGenreId,setActiveGenreId] = useState(null)

    return (
        <div className="my-3">
            {
                load ?
                    ""
                    :

                    <div className="d-flex slider-over">
                        <div className="my-2">
                            <span className={`rounded py-1 px-2 ${activeGenreId === null ? "slider-active-tag" : "slider-tags" }`} onClick={() =>{
                                setActiveGenreId(null)
                                setGenreId(0)
                            }}> All</span>
                        </div>


                        {data.genres.map(element => {

                            return (
                                <div key={element.id} className="my-2">

                                    <span className={` rounded py-1 px-2 ${activeGenreId == element.id ?"slider-active-tag" : "slider-tags" }`} onClick={() => {
                                        setGenreId(element.id)
                                        setActiveGenreId(element.id)

                                    }}> 
                                        {element.name}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
            }
        </div>
    )
}
export default Genres