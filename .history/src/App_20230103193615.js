import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import CurrentYear from "./components/CurrentYear";
import Home from "./Home";
import YearOne from "./components/AllYears/YearOne";
import YearThree from "./components/AllYears/YearThree";
import YearTwo from "./components/AllYears/YearTwo";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/currentYear' element={<CurrentYear/>} />
            <Route  exact path='/yearOne' element={<YearOne/>} />
            <Route  exact path='/yearTwo' element={<YearTwo/>} />
            <Route  exact path='/yearThree' element={<YearThree/>} />
          </Routes>
    );
  }