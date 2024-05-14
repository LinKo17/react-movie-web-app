import { useSelector } from "react-redux"


import FavCom from "./FavCom"

import "../../css/more.css"

function Favourite() {
    let fav = useSelector(e => e.fav.value)

    return (
        <>
            {
                fav.length > 0

                &&

                <div className="mt-3">

                    <h2 className="text-center mb-3">Favourite</h2>

                    <div className="more-grid">
                        {fav.map(e => {
                            return (
                                <div className="more-grid-container" key={e.id}>
                                    <FavCom key={e.id} id={e.id} />
                                </div>
                            )

                        })}
                    </div>

                </div>

            }
        </>
    )
}
export default Favourite