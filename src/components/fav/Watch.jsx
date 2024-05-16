import { useSelector } from "react-redux"


import FavCom from "./FavCom"

import "../../css/fav.css"
import { useDispatch } from "react-redux"
import { removeWatchId } from "../../redux/watchSlice"
import { useState } from "react"

function Watch() {
    let watch = useSelector(e => e.watch.value)
    let dispatch = useDispatch()

    let [con,setCon] = useState(false)

    function watchClear() { 
            dispatch(removeWatchId([]))
            localStorage.removeItem("watchLaterItemList")
            setCon(false)
    }

    return (
        <>
            {
                watch.length > 0

                &&

                <div className="mt-5">

                    <div className="mb-1 d-flex justify-content-between">
                    <p className="">Watch Later</p>
                    <button className="text-danger delete-btn" onClick={() => setCon(!con)}>delete</button>
                    </div>

                    <div className="fav-blade-style">
                        {watch.map(e => {
                            return (
                                <div key={e.id} className="fav-inner-blade-style">
                                    <FavCom key={e.id} id={e.id} />
                                </div>
                            )

                        })}
                    </div>

                </div>

            }

            <div className={`${con ? "confirm-con-down" : "confirm-con-up"}`}>
                <div className="confirm-form">
                    <span>Do you want to delete watch later list ?</span>
                    <div className="confrim-btn">
                        <button className="con-btn con-yes " onClick={() => watchClear()}>yes</button>
                        <button className="con-btn con-no" onClick={() => setCon(false)}>no</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Watch