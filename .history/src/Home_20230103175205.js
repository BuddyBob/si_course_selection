import React from 'react'
import arrow from './assets/Arrow 5.png'
import getLocalStorage from './getLocalStorage';
import { useNavigate } from "react-router-dom";
import vector1 from './assets/Vector 1.png'

function Home() {
  let navigate = useNavigate();
  function formSubmit(e){
    //set up local storage for grade and year inputs
    getLocalStorage()
    e.preventDefault();
    console.log("option changed")
    console.log(e.target.elements[0].value, e.target.elements[1].value)
    localStorage.setItem("grade", e.target.elements[0].value);
    localStorage.setItem("year", e.target.elements[1].value);
    navigate("/yearone"); 
  }
  return (
    <div>
      <input type="image" src={vector1} alt="vector" className="vector1" />
      <div className="main-container">
        <h1 className="title">Saint Ignatius Course Selection</h1>
        <form className="pg1dd" onSubmit={(e) => formSubmit(e)}>
            <select className="grade">
                <option>Freshman</option>
                <option>Sophomore </option>
                <option>Junior</option>
                <option>Senior</option>
            </select>

            <select className="years">
                <option>Current Year</option>
                <option>All Years</option>
            </select>
            <input type="image" src={arrow} alt="arrow1" className="arrow1 bounce1" />
        </form>



      </div>
    </div>
  )
}
  
export default Home