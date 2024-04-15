import { Circle, Line } from "rc-progress";
import "../../css/home/rating.css"
import { useEffect, useState } from "react";

function RatingCircle(props) {

        let {rating} = props

        let [mainColor,setMainColor] = useState("red")
        let [miniColor,setMiniColor] = useState("blue")
        
        
        useEffect(() => {

            if(rating <= 39){

                setMainColor("#db2360ff")
                setMiniColor("#571435ff")


            }else if(rating >= 40 && rating <= 69){

                setMainColor("#d3d631ff")
                setMiniColor("#423d0fff")

            }else if(rating >= 70){

                setMainColor("#21d17cff ")
                setMiniColor("#204529ff")
            }

        },[])


    return (
        <div style={{ width: "50px", height: "50px" }} className="position-relative me-2">
            <Circle
                percent={rating} // rating width
                strokeColor={mainColor} //rating color
                strokeWidth={10} // rating think
                trailColor={miniColor} // other color
                trailWidth={10}   // other think
                strokeLinecap="round" // style
            />

            <div className="position-absolute top-50 start-50 translate-middle">
                {rating}%
            </div>

        </div>
    )
}
export default RatingCircle