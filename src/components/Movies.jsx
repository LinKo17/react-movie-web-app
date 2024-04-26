import MGenres from "./movies/MGenres"
// import MList from "./movies/MList"
import MList from "./movies/MList"

import { useState } from "react"

function Movies(){
    const [genreId, setGenreId] = useState(0)

    return (
        <div className="container">
            <MGenres setGenreId={setGenreId} />
            <MList genreId={genreId}/>   
        </div>
    )
}
export default Movies