import './allYears.css'

import React, {useState} from 'react'

import courseData from 'path/to/myJson.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  return (
    <div>
      <div className="Headers">
        <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
        <h3 className="headerCourseSelect" >{grade} year 1</h3>
      </div>
      
    </div>
  )
}
