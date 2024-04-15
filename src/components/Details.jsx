import { useParams } from "react-router-dom"

function Details(){
    let {id} = useParams();
   
    return (
        <>
            <h1>This is Details{id}</h1>
        </>
    )
}
export default Details