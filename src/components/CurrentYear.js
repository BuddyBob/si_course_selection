import './courseSelection.css'

import React, {useEffect, useState} from 'react'

import arrow from '../assets/Arrow 5.png'
import courseData from '../assets/courses.json'
import { useNavigate } from "react-router-dom";

export default function CurrentYear() {
  let navigate = useNavigate();
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData[grade].subjects
  let courses = courseData[grade].classes
  

  const [activeButtons, setActiveButtons] = useState({});

  const handleClick = (subject, course) => {
    setActiveButtons({
      ...activeButtons,
      [subject]: course
    });
  }

  const isActive = (subject, course) => activeButtons[subject] === course

function courseSelect(e) {
  let userCourse = e.target.innerHTML
  let userSubject = e.target.value
}


function nextPage() {
    //year four is last year
    navigate("/ThisIsTheResultsPage");
}

    return (
    <div>
        <div className="Headers">
          <div className="Nav">
            <h1 className="navCourseSelect" >SI Course Selection</h1>
          </div>
          <h1 className="titleCourseSelect" >Current Year - {grade}</h1>
        </div>


        <div className="courseSelect">
          {subjects.map((subject, index) => (
            <div key={index}>
              <h2 className="subject">{subject}</h2>
              <div className="courses">
              {courses[subject].map((course, index) => (
                <div key={index}>
                  <button value={subject} className={isActive(subject, course) ? 'course_btn_active' : 'course_btn'} onClick={() => handleClick(subject,course)}>{course}</button>
                </div>
              ))}
              </div>
            </div>
          ))}
            <input type="image" src={arrow} alt="arrow2" className="arrow2 bounce2" onClick={() => nextPage()}/>
        </div>

    </div>
  )
}
