import { Link } from "react-router-dom"
function Fav(){
    return (
        <>
            <h1>Favourite</h1>
            <div className="bg-danger" style={{width:"200px",height:"1000px"}}></div>
            <Link to="/movies">
                movies 
            </Link>
        </>
    )
}
export default Fav