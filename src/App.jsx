import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// component section
import Nav from "./components/Nav"
import Home from "./components/Home"
import Movies from "./components/Movies"
import Tv from "./components/Tv"
import Fav from "./components/Fav"
import Error from "./components/Error"
import Details from "./components/Details"
import More from "./components/More"

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Nav />}>

            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/:id/details" element={<Details/>}/>
            <Route path="/tv" element={<Tv/>} />
            <Route path="/fav" element={<Fav />} />

            <Route path="/more/:action" element={<More/>}/>

          </Route>

          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </>
  )
}
export default App