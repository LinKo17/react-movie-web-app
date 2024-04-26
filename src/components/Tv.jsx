import TGenres from "./tv/TGenres"
import TList from "./tv/TList"

import { useState } from "react"

function Tv(){
    const [genreId, setGenreId] = useState(0)

    console.log(genreId)
    return (
        <div className="container">
            <TGenres setGenreId={setGenreId} />
            <TList genreId={genreId}/>   
        </div>
    )
}
export default Tv