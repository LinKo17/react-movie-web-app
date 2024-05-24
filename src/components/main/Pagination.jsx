import { useState, useEffect } from "react"

//css
import "../../css/main/pagination.css"

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

function Pagination(props) {
    let { data, load, pageNum, setPageNum } = props.element

    let [ttpage, setTTpage] = useState(0)

    useEffect(() => {
        if (!load) {
            setTTpage(data.total_pages)
        }
    }, [load])

    return (
        <>
            {
                ttpage != 0

                &&

                <>
                    {/* <div className="pagination-container">
                        <ul className="movie-pagination">
                            <li className="pagination-icon"><FontAwesomeIcon icon={faChevronLeft} /></li>
                            <li className="pagination-bg">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li className="pagination-more">...</li>
                            <li>{ttpage - 1}</li>
                            <li>{ttpage}</li>
                            <li className="search-page-input">
                                <input type="number" onChange={(e) => setPageNum(e.target.value)} value={pageNum} />
                            </li>
                            <li className="pagination-icon"><FontAwesomeIcon icon={faChevronRight} /></li>
                        </ul>
                    </div> */}


                    <div className="pagination-container">

                        <ul className="movie-pagination">

                            <li className="pagination-icon" onClick={() => setPageNum(pageNum > 1 ? Number(pageNum) - 1 : 1 )}><FontAwesomeIcon icon={faChevronLeft} /></li>

                            <li onClick={() => setPageNum(1)}>1</li>

                            <li onClick={() => setPageNum(2)}>2</li>

                            <li className="search-page-input">
                                <input type="number" onChange={(e) => setPageNum(e.target.value > ttpage ? ttpage : e.target.value)} value={pageNum  || 1} />
                            </li>

                            <li onClick={() => setPageNum(ttpage)} >{ttpage}</li>

                            <li className="pagination-icon" onClick={() => setPageNum(pageNum < ttpage ? Number(pageNum) + 1 : ttpage )}><FontAwesomeIcon icon={faChevronRight} /></li>

                        </ul>

                    </div>
                </>
            }
        </>
    )
}
export default Pagination