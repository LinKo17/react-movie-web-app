import Genres from "../main/Genres"

import useMultiple from "../../custom/useMultiple"
import configuration from "../../config/configuration"

function MGenres() {
    const { data, load } = useMultiple(configuration.genres.genre + configuration.genres.movies)

    return (
        <Genres data={data} load={load} act="movies"/>
    )
}
export default MGenres