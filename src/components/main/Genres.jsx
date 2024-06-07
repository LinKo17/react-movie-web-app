import { useEffect, useState } from "react"
import "../../css/main/genres.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

function Genres(props) {
    const {data,load,act} = props
    const {id} = useParams()

    const [con,setCon] = useState(false)
    useEffect(() => {
        if(!load){
            let res = data.genres.find(e => e.id  == id)

            if(res == undefined){
                setCon(true)
            }else{
                setCon(false)
            }
        }
    })

    return (
        <div className="genre my-3">
            {
                load ?
                    ""
                    :

                    <div className="d-flex slider-over">
                        <div className="my-2">
                            <span className={` rounded py-1 px-2 ${ id == 0 || con ? "slider-active-tag" : "slider-tags"}`}>
                                <Link to={`/${act}/${0}/1`}  className="slider-tags-link">
                                    All
                                </Link>
                            </span>
                        </div>

                        {
                            data.genres.map(e => {
                                return <div key={e.id} className="my-2">
                                    <span className={` rounded py-1 px-2 ${ id == e.id ? "slider-active-tag" : "slider-tags"}`}>
                                        <Link to={`/${act}/${e.id}/1`} className="slider-tags-link">{e.name}</Link>
                                    </span>
                                </div>


                                // <div key={e.id}>
                                //     <Link to={`/mv/${e.id}`}>{e.name}</Link>
                                // </div>
                            })
                        }
                    </div>
            }
        </div>
    )
}
export default Genres