import useMultiple from "../../custom/useMultiple"

const useTTpage = (results) => {

    let {data,load} = useMultiple(results)

    return {length : data, time : load}
}
export default useTTpage