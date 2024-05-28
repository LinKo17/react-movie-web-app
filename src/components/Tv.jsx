import { useParams } from "react-router-dom"
import TGenres from "./tv/TGenres"
import TList from "./tv/TList"
import Footer from "./Footer"

function Tv() {
    let { id } = useParams()
    return (

        <>
            <div className="container">
                <TGenres />
                <TList genreId={id} />
            </div>

            <Footer />
        </>
    )
}
export default Tv