import React from 'react'
import vector1 from './assets/Vector 1.png'
function Home() {
  return (
    <div>
      <input type="image" src={vector1} alt="vector" className="vector1" />
      <div className="main-container">
        <h1 className="title">Saint Ignatius Course Selection</h1>
        <form className="pg1dd">
            <select className="grade">
                <option>Freshman</option>
                <option>Sophmore </option>
                <option>Junior</option>
                <option>Senior</option>
            </select>
            <select className="years">
                <option>Current Year</option>
                <option>All Year</option>
            </select>
        </form>
      </div>
    </div>
  )
}

export default Home