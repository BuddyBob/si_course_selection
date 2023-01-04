import '../courseSelection.css'

import React, {useEffect, useState} from 'react'

import arrow from '../../assets/Arrow 5.png'
import courseData from '../../assets/courses.json'
import { useNavigate } from "react-router-dom";

export default function Yearone() {
  let navigate = useNavigate();
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData[grade].subjects
  let courses = courseData[grade].classes
  


function nextPage() {
  if (grade !== "Senior"){
    navigate("/yeartwo");
  }
  else{
    navigate("/ThisIsTheResultsPage");
  }
}

    return (
    <div>
        <div className="Headers">
          <div className="Nav">
            <h1 className="navCourseSelect" >SI Course Selection</h1>
          </div>
          <h1 className="titleCourseSelect" >All Years - {grade} </h1>
        </div>

        <div className="courseSelect">
          {subjects.map((subject, index) => (
            <div key={index}>
              <h2 className="subject">{subject}</h2>
              <div className="courses">
              {courses[subject].map((course, index) => (
                <div key={index}>
                    <button value={subject} className="course_btn" onClick={(e) => courseSelect(e)}>{course}</button>
                </div>
              ))}
              </div>
            </div>
          ))}
            <input type="image" src={arrow} alt="arrow2" className="arrow2 bounce2"/>
        </div>

    </div>
  )
}
