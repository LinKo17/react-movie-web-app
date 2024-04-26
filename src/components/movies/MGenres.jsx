import Genres from "../main/Genres"

import useMultiple from "../../custom/useMultiple"
import configuration from "../../config/configuration"

function MGenres({setGenreId}) {
    const { data, load } = useMultiple(configuration.genres.genre + configuration.genres.movies)

    return (
        <Genres data={data} load={load} setGenreId={setGenreId} />
    )
}
export default MGenres