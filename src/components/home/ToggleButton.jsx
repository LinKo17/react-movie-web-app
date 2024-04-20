import { useEffect, useState } from "react"
import "../../css/toggle.css"

function ToggleButton(props){
    let {checkTime, setCheckTime } =props

    return (
        <div className="toggle-button-container" onClick={() => setCheckTime(!checkTime)}>
            <span className="toggle-day-button">Day</span>
            <span className="toggle-week-button">Week</span>
            <span className={checkTime ? "toggle-button-true" :"toggle-button-false" }></span>
        </div>
    )
}
export default ToggleButton
