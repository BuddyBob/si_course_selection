import './allYears.css'

import React, {useState} from 'react'

import courseData from '../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  const [buttonGroups, setButtonGroups] = useState({})
  let subjects = courseData.Freshman.subjects
  let courses = courseData.Freshman.classes

  function courseSelected(e){
    console.log(e.target.value)
    console.log(e.target.innerHTML)
  }
  for (var subject of subjects){
    // add subject:none ass a dictionary to buttonGroups
    buttonGroups[subject] = "None"
  }

  console.log(buttonGroups)
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
                  <button value={subject}  onClick={(e) => courseSelected(e)} className="course_btn">{course}</button>
                </div>
              ))}
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}
