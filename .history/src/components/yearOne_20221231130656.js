import './allYears.css'

import React, {useEffect, useState} from 'react'

import courseData from '../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData.Freshman.subjects
  let courses = courseData.Freshman.classes
  
  //get all years data
  let allYears = JSON.parse(localStorage.getItem('allYears'))
  console.log(allYears)
  let yearOneData = allYears[grade]
  console.log(yearOneData)

  //parse AllYearsData
  // console.log(yearOneData)

function courseSelect(e) {
  let userCourse = e.target.innerHTML
  let userSubject = e.target.value
  //add new Course to allYearsData
  console.log(allYears)
  // localStorage.setItem('allYears', added)

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
                    {yearOneData[grade][subject][course] === "active" ?
                    <button value={subject}  className="course_btn_selected" >{course}</button>
                    : <button value={course} className="course_btn" onClick={(e) => courseSelect(e)}>{course}</button>}

                </div>
              ))}
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}
