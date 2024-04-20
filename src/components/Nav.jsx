import { Outlet, Link } from "react-router-dom"
import "../css/nav.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"


import Footer from "./Footer"
function Nav() {

    let [mobile, setMobile] = useState(false)

    return (
        <>
            <div className="navigation">
                <div className="container d-flex justify-content-between">

                    <div className="">
                        <Link to="/" className="text-decoration-none fs-2">
                            <span className="logo">
                                Nightflix
                            </span>
                        </Link>
                    </div>

                    <div className={`slider  ${mobile ? "menu-list" : "menu"}`} onClick={() => setMobile(!mobile)}>
                        <ul className="list-unstyled">
                            <li className="menu-float p-4">
                                <Link to="/" className="active text-decoration-none menu-link">Home</Link>
                            </li>

                            <li className="menu-float p-4">
                                <Link to="/movies" className=" active text-decoration-none menu-link">Movies</Link>
                            </li>

                            <li className="menu-float p-4">
                                <Link to="/series" className="active text-decoration-none menu-link">Series</Link>
                            </li>

                            <li className="menu-float p-4">
                                <Link to="/fav" className="active text-decoration-none menu-link">Favourites</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="p-3 menu-icon-box" >
                            <Link onClick={() => setMobile(!mobile)} className="menu-icon">
                                <FontAwesomeIcon icon={faBars} />
                            </Link>
                    </div>

                </div>
            </div>

            <div className="">
                {<Outlet />}
            </div>

            <Footer/>
        </>
    )
}
export default Nav