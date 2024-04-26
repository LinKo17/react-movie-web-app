import { Link } from "react-router-dom"
import configuration from "../../config/configuration"
import "../../css/main/card.css"

// jsx
import RatingCircle from "../home/RatingCircle"

//image section
import noposter from "../../assets/noo.svg"
import CardSkeleton from "../skeleton/CardSkeleton"
function Card(props) {
    let element = props.element
    console.log(element)
    return (

        <Link to={`/${element.id}/details`} className="card-link">

            {
                element.poster_path ?
                    <div className="card-box">

                        {
                            element.vote_average != 0 ?

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
                    :
                    <CardSkeleton />

            }

        </Link>
    )
}
export default Card