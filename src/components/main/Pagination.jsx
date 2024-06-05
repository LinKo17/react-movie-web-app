import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import "../../css/main/pagination.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Pagination(props) {

    let { pgId } = useParams()
    let {pageNum,setPageNum,data,load} = props.element
    let [ttpage,setTTpage] = useState("")

    useEffect(() => {
        if(!load){
            setTTpage(data.total_pages)
            console.log(data.total_pages)
        }
    },[data,load])

    // console.log(pageNum)
    return (
            <div className="pagination-container">

                <ul className="movie-pagination">

                    <li className="pagination-icon" onClick={() => setPageNum(pageNum > 1 ? Number(pgId == pageNum ? pageNum : pgId) - 1 : 1)}><FontAwesomeIcon icon={faChevronLeft} /></li>

                    <li onClick={() => setPageNum(1)}>1</li>

                    {ttpage >= 2 && <li onClick={() => setPageNum(2)}>2</li>}
                    
                    
                    {ttpage >= 3 && <li onClick={() => setPageNum(3)}>3</li>}

                    {ttpage > 1 &&
                    
                    <li className="search-page-input">
                        <input 
                        type="number" 
                        onChange={(e) => setPageNum(/^[1-9]\d*$/.test(e.target.value) ? (e.target.value <= ttpage ? e.target.value : ttpage) : 1)} 
                        value={pgId == pageNum ? pageNum : pgId || 1} />
                    </li>
                    }

                    {ttpage > 1 && <li onClick={() => setPageNum(ttpage)} >{ttpage}</li>}

                    <li className="pagination-icon" onClick={() => setPageNum(pageNum < ttpage ? Number(pgId == pageNum ? pageNum : pgId) + 1 : ttpage)}><FontAwesomeIcon icon={faChevronRight} /></li>

                </ul>

            </div>
    )
}
export default Pagination