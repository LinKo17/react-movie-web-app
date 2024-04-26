import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"
import List from "../main/List"
import All from "./All"

function MList({ genreId }) {
    let { data, load } = useMultiple(configuration.discover.movie + genreId, genreId)


    return (
        <>
            <h1>{genreId}</h1>

            {
                genreId === 0 ?
                    <All/>
                    :
                    <List element={{ data, load }} />
            }
        </>
    )
}
export default MList