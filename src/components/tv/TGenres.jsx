import Genres from "../main/Genres"

import useMultiple from "../../custom/useMultiple"
import configuration from "../../config/configuration"

function TGenres({setGenreId}) {
    const { data, load } = useMultiple(configuration.genres.genre + configuration.genres.tv)

    return (
        <Genres data={data} load={load} setGenreId={setGenreId} act="tv"/>
    )
}
export default TGenres