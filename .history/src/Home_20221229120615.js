import React from 'react'
import arrow5 from './assets/Arrow 5.svg'
import vector1 from './assets/Vector 1.png'
function Home() {
  function formSubmit(e){
    e.preventDefault();
    console.log("option changed")
    console.log(e.target.value)
  }
  return (
    <div>
      <input type="image" src={vector1} alt="vector" className="vector1" />
      <div className="main-container">
        <h1 className="title">Saint Ignatius Course Selection</h1>
        <form className="pg1dd" onSubmit={() => formSubmit()}>
            <select className="grade">
                <option>Freshman</option>
                <option>Sophmore </option>
                <option>Junior</option>
                <option>Senior</option>
            </select>

            <select className="years">
                <option>Current Year</option>
                <option>All Years</option>
            </select>
            <inpuy type="button" src={arrow5} alt="arrow" className="arrow5" />
        </form>



      </div>
    </div>
  )
}
  
export default Home