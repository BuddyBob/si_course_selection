import './allYears.css'

import React, {useState} from 'react'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  return (
    <div>
      <div className="header">
        <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
        <h3 className="titleCourseSelect" >{grade} year 1</h3>
      </div>
    </div>
  )
}
