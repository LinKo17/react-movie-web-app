import { Link } from "react-router-dom"
import configuration from "../../config/configuration"
import "../../css/main/card.css"

// jsx
import RatingCircle from "../home/RatingCircle"

//image section
import noposter from "../../assets/noposter.png"

function Card(props) {
    let element = props.element

    return (

        <Link to={`/${element.id}/${element.title || element.name}`} className="card-link">

            {
                <div className="card-box">

                    {
                        element.vote_average != 0 && !isNaN(element.vote_average) ?

                            <div className="rating-cyc-container">
                                <RatingCircle
                                    rating={Math.round((element.vote_average / 10) * 100)}
                                    width={"40px"}
                                    height={"40px"}
                                    fs={"11px"}
                                />
                            </div>

                            :

                            ""

                    }

                    {
                        element.poster_path != null ?

                            <img src={configuration.image.w_500 + element.poster_path} />

                            :
                            <img src={noposter} />
                    }

                    <p style={{ textDecoration: "none" }}>{element.title || element.name}</p>
                </div>

            }

        </Link>
    )
}
export default Card