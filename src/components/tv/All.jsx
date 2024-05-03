import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"
import List from "../main/List"

function All(){
    let {data,load} = useMultiple(configuration.tv.tv + configuration.tv.popular)
    return (
        <List element={{ data, load }} />
    )
}
export default All