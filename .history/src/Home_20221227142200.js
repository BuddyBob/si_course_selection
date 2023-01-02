import React from 'react'
import vector1 from './assets/Vector 1.png'
function Home() {
  return (
    <div>
      <input type="image" src={vector1} alt="vector" className="vector1" />
      <div className="main-container">
        <h1 className="title">Saint Ignatius Course Selection</h1>
        <input type="button" className="Grade"/>
        <input type="button" className="Years"/>
      </div>
    </div>
  )
}

export default Home