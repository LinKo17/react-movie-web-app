import { Link } from "react-router-dom"
import "../css/footer.css"

// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


function Footer() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return (
        <div>

            <div className="footer">
                <div className="container">

                    <div className="row">

                        <div className="col-14 col-md-6 col-lg-4 f-col">

                            <Link to="/" className="text-decoration-none fs-2">
                                <span className="logo">
                                    Nightflix
                                </span>
                            </Link>

                            <h5>Nightflix is for everyone.</h5>
                            {/* <h5>Chill And Relax</h5> */}
                        </div>

                        <div className="col-14 col-md-6 col-lg-4 s-col">

                            <p>Company</p>
                            <div className="footer-follow-line"></div>

                            <p className="">
                                <Link to="/" className="footer-nav">Home</Link>
                            </p>

                            <p className="">
                                <Link to="/movies/0" className="footer-nav">Movies</Link>
                            </p>

                            <p className="">
                                <Link to="/tv/0" className="footer-nav">Tv</Link>
                            </p>

                            <p className="">
                                <Link to="/fav" className="footer-nav">Favourites</Link>
                            </p>
                        </div>

                        <div className="col-14 col-md-6 col-lg-4 t-col">

                            <p className="">Follow Us</p>

                            <div className="footer-follow-line"> </div>

                            <div className="footer-image">

                                <div className="f-icon">
                                    <a href="">
                                        <FontAwesomeIcon icon={faFacebook} className="footer-facebook" />
                                    </a>
                                </div>
                                <div className="f-icon">
                                    <a href="">
                                        <FontAwesomeIcon icon={faYoutube} className="footer-youtube" />
                                    </a>
                                </div>
                                <div className="f-icon">
                                    <a href="">
                                        <FontAwesomeIcon icon={faInstagram} className="footer-instagram" />
                                    </a>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className="text-center opacity-50 m-3 copy-right">
                &copy; Copyright {currentYear} Nightflix
            </div>


        </div>
    )
}
export default Footer