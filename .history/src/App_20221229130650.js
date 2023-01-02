import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import Home from "./Home";
import ee from "./components/YearOne";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/year-one' element={<ee/>} />
          </Routes>
    );
  }