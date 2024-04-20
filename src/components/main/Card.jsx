import { Link } from "react-router-dom"
import configuration from "../../config/configuration"
import "../../css/main/card.css"

// jsx
import RatingCircle from "../home/RatingCircle"

function Card(props) {
    let element = props.element
    // console.log(element)
    return (

        <Link to={`/${element.id}/details`} className="card-link">

        <div className="card-box">

            <div className="rating-cyc-container">
                <RatingCircle
                    rating={Math.round((element.vote_average / 10) * 100)}
                    width={"40px"}
                    height={"40px"}
                    fs={"11px"}
                />
            </div>

            <img src={configuration.image.w_500 + element.poster_path} />
            <p style={{    textDecoration: "none"}}>{element.title || element.name}</p>
        </div>

        </Link>
    )
}
export default Card