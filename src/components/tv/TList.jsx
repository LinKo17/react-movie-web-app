import { useNavigate, useParams } from "react-router-dom"
import configuration from "../../config/configuration"
import useMultiple from "../../custom/useMultiple"
import List from "../main/List"
import All from "./All"
import { useEffect, useState } from "react"
import Pagination from "../main/Pagination"

function TList({ genreId }) {
    // -------------------------------------------------- for pagination
    let { pgId } = useParams()
    let navigate = useNavigate()
    let [pageNum, setPageNum] = useState(pgId)
    let pages = pgId == pageNum ? pageNum : pgId

    useEffect(() => {
        navigate(`/tv/${genreId}/${pageNum}`)
    }, [pageNum])
    // --------------------------------------------------

    let { data, load } = useMultiple(configuration.discover.tv + genreId + `&page=${pages}`, genreId, pages)

    return (
        <>

            {

                !load

                    &&

                    genreId == 0 || data.total_results == 0 ?

                    <All />

                    :
                    <>
                        <List element={{ data, load }} />
                        <Pagination element={{
                            pageNum,
                            setPageNum,
                            data: data.total_pages <= 500 ? data : { ...data, total_pages: 500 },
                            load
                        }} />
                    </>
            }
        </>
    )
}
export default TList