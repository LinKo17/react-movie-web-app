import "../css/home.css"
import Footer from "./Footer"

import Poster from "./home/Poster"
import TopRated from "./home/common/TopRated"
import TopRatedTv from "./home/common/TopRatedTv"
import Trending from "./home/common/Trending"
import Upcoming from "./home/common/Upcoming"




function Home() {

    return (
        <>
            <Poster />

            <div className="container my-5">
                <Trending />
                <TopRated/>
                <TopRatedTv/>
                {/* <Upcoming/> */}

            </div>
                <Footer/>
        </>
    )

}
export default Home

