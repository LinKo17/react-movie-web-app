//my component
import Card from "./Card"
import CardSkeleton from "../skeleton/CardSkeleton"

//my css
import "../../css/more.css"

function List(props) {
    const {data,load} = props.element

    return (
        <div className="container my-5">
            <div className="row">
                {load ?

                    <div className="more-grid">
                        {Array.from({ length: 18 }).map((element,index) => {
                            return (
                                <div className="more-grid-container my-2" key={index}>
                                    <CardSkeleton/>
                                </div>
                            )
                        })}
                    </div>

                    :
                    <div className="more-grid">
                        {data.results.map(element => {
                            return (
                                <div className="more-grid-container" key={element.id}>
                                    <Card element={element} />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
export default List