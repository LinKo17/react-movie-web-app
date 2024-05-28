import { useParams } from "react-router-dom"
import MGenres from "./movies/MGenres"
import MList from "./movies/MList"
import Footer from "./Footer"

function Movies() {
    const { id } = useParams()
    return (
        <>
            <div className="container">
                <MGenres />
                <MList genreId={id} />
            </div>

            <Footer />
        </>
    )
}
export default Movies