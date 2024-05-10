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
import Search from "./components/Search"
import { useState } from "react"

function App() {
  let [title,setTitle] =  useState(null)//this is use to search movie using title from Nav.jsx file
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Nav setTitle={setTitle}/>}>

            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            
            <Route path="/tv" element={<Tv/>} />
            <Route path="/fav" element={<Fav />} />

            <Route path="/more/:action" element={<More/>}/>
            <Route path="/search/" element={<Search/>}/>

          </Route>
          <Route path="/:id/:name" element={<Details/>}/>
          <Route path="*" element={<Error />} />

        </Routes>
      </Router>
    </>
  )
}
export default App