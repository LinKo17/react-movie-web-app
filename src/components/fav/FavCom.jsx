import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"

import Card from "../main/Card"
function FavCom(props){

    let {id} = props

    let { data, load } = useMultiple(configuration.details.movie + id)
    return (
        <Card element={data}/>
    )
}
export default FavCom