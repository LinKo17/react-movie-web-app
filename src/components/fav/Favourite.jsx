import { useSelector } from "react-redux"


import FavCom from "./FavCom"

import "../../css/fav.css"
import { useDispatch } from "react-redux"
import { removeId } from "../../redux/favouriteSlice"
import { useState } from "react"

function Favourite() {
    let fav = useSelector(e => e.fav.value)
    let dispatch = useDispatch()
    let [con,setCon] = useState(false)

    function favClear() {

            dispatch(removeId([]))
            localStorage.removeItem("favItemList")
            setCon(false)
    }
    return (
        <>
            {
                fav.length > 0

                &&

                <div className="mt-3">

                    <div className="mb-1 d-flex justify-content-between">
                        <p className="">Favourite</p>
                        <button className="text-danger delete-btn" onClick={() => setCon(!con)}>delete</button>
                    </div>

                    <div className="fav-blade-style">
                        {fav.map(e => {
                            return (
                                <div className="fav-inner-blade-style" key={e.id}>
                                    <FavCom key={e.id} id={e.id} />
                                </div>
                            )

                        })}
                    </div>

                </div>

            }

            <div className={`${con ? "confirm-con-down" : "confirm-con-up"}`}>
                <div className="confirm-form">
                    <span>Do you want to delete favourite later list ?</span>
                    <div className="confrim-btn">
                        <button className="con-btn con-yes " onClick={() => favClear()}>yes</button>
                        <button className="con-btn con-no" onClick={() => setCon(false)}>no</button>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Favourite