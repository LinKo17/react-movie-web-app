import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"
import List from "../main/List"
import All from "./All"

function MList({ genreId }) {
    let { data, load } = useMultiple(configuration.discover.movie + genreId, genreId)

    return (
        <>

            {
                !load 
                
                &&

                    genreId == 0 || data.total_results == 0 ?
                    <All/>
                    :
                    <List element={{ data, load }} />
            }
        </>
    )
}
export default MList