import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"
import List from "../main/List"

function All(){
    let {data,load} = useMultiple(configuration.movies.movie + configuration.movies.popular)
    return (
        <List element={{ data, load }} />
    )
}
export default All