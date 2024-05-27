import { useEffect, useState } from "react";
import List from "../main/List";

function SResult(props){
    const [data,setData] = useState([])
    const {chData,load} = props.element

    useEffect(() => {
        if(!load){
            const res = chData.results.filter(e => e.media_type != "person")
            setData({results :res})
        }
    },[])

    console.log(chData)
    console.log(data)
    
    return (
        // <List element={{ data, load }} />
        <h1>Hello</h1>
    )
}
export default SResult
