import './allYears.css'

import React, {useState} from 'react'

import courseData from '../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  courses = courseData.Freshman
  return (
    <div>
      <div className="Headers">
        <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
        <h3 className="headerCourseSelect" >{grade} year 1</h3>
      </div>
      
    </div>
  )
}
