import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// component section
import Nav from "./components/Nav"
import Home from "./components/Home"
import Movies from "./components/Movies"
import Series from "./components/Series"
import Fav from "./components/Fav"
import Error from "./components/Error"
import Details from "./components/Details"

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Nav />}>

            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id/details" element={<Details/>}/>
            <Route path="/series" element={<Series />} />
            <Route path="/fav" element={<Fav />} />

          </Route>

          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </>
  )
}
export default App