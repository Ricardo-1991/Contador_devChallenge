import { BrowserRouter as Router, Route } from "react-router-dom"
import {Main} from "../components/Main/Main"
import {Count} from "../components/Count/Count"
import { Routes } from "react-router-dom"

export default function MainRoutes () {
    return (
      <Router>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/count" element={<Count/>}/> 
         </Routes>
      </Router>

    )
}