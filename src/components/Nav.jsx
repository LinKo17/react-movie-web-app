import { Outlet, Link } from "react-router-dom"
import "../css/nav.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


import Footer from "./Footer"
import { useState } from "react"

function Nav() {
    const [mobile, setMobile] = useState(false)
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
                                <Link to="/tv" className="active text-decoration-none menu-link">Tv</Link>
                            </li>

                            <li className="menu-float p-4">
                                <Link to="/fav" className="active text-decoration-none menu-link">Favourites</Link>
                            </li>
                        </ul>
                    </div>



                    <div className="icon-container">

                        <Link to="/search/" className="search-box">
                            <FontAwesomeIcon icon={faSearch} />
                        </Link>


                        <div className="menu-icon-box" >
                            <Link onClick={() => setMobile(!mobile)} className="menu-icon">
                                <FontAwesomeIcon icon={faBars} />
                            </Link>
                        </div>


                    </div>

                </div>
            </div>

            <div className="">
                {<Outlet />}
            </div>

            {/* <Footer /> */}
        </>
    )
}
export default Nav