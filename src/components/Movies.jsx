import { useParams } from "react-router-dom"
import MGenres from "./movies/MGenres"
import MList from "./movies/MList"


function Movies(){
    const {id} = useParams()
    return (
        <div className="container">
            <MGenres/>
            <MList genreId={id}/>   
        </div>
    )
}
export default Movies