import './allYears.css'

import React, {useEffect, useState} from 'react'

import arrow5 from '../../assets/Arrow 5.png'
import courseData from '../../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData.Freshman.subjects
  let courses = courseData.Freshman.classes
  


function courseSelect(e) {
  let userCourse = e.target.innerHTML
  let userSubject = e.target.value


}

    return (
    <div>
        <div className="Headers">
          <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
        </div>
        <h3 className="headerCourseSelect" >{grade} Year 1</h3>


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
            <input type="image" src={arrow5} alt="arrow" className="arrow5 bounce" />
        </div>

    </div>
  )
}
