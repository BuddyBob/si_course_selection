import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import Home from "./Home";
import YearOne from "./components/AllYears/YearOne";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/yearOne' element={<YearOne/>} />
          </Routes>
    );
  }