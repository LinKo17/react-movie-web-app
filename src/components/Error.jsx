import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="d-flex justify-content-center  align-items-center" style={{ height: "100vh" }}>

            <div>

                <h3>
                    404 | Not Found
                </h3>

                <div className="text-center mt-3">
                    <Link to="/">
                        <button className="btn btn-primary">Home</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}
export default Error