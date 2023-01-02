import './index.css'

import {
    Route,
    Routes,
} from "react-router-dom";

import Dashboard from "./components/Dash";
import Home from "./Home";

export default function App() {
    return (
          <Routes>
            <Route  exact path='/' element={<Home/>} />
            <Route  exact path='/yearone' element={<Dashboard/>} />
          </Routes>
    );
  }