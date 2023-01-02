import './allYears.css'

import React, {useState} from 'react'

import courseData from '../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData.Freshman.subjects
  let courses = courseData.Freshman.classes

  return (
    <div>
        <div className="Headers">
          <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
          <h3 className="headerCourseSelect" >{grade} year 1</h3>
        </div>


        <div className="courseSelect">
          {subjects.map((subject, index) => (
            <div key={index}>
              <h2 className="subject">{subject}</h2>
              {courses[subject].map((course, index) => (
                <div className="courses" key={index}>
                  <button className="course_btn">{course}</button>
                </div>
              ))}
            </div>
          ))}

        </div>
    </div>
  )
}
