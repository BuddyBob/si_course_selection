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
  const [activeButtons, setActiveButtons] = useState({});
  let preReq = JSON.parse(localStorage.getItem("coursesSelected"))
  const handleClick = (subject, course) => {
    setActiveButtons({
      ...activeButtons,
      [subject]: course
    });
  }

  const isActive = (subject, course) => activeButtons[subject] === course


function nextPage() {

  //add new courses to their respective subjects in localStorage under the current grade
  localStorage.setItem(grade, JSON.stringify(activeButtons));
  
  //add new courses the all coursesSelected array
  let coursesSelected = JSON.parse(localStorage.getItem("coursesSelected"))
  let newCourses = coursesSelected.concat(Object.values(activeButtons))
  localStorage.setItem("coursesSelected", JSON.stringify(newCourses))

  console.log(newCourses)

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
            <h1 className="navCourseSelect" >SI COURSE SELECTION</h1>
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
                  <button value={subject} className={isActive(subject, course["name"]) ? 'course_btn_active' : 'course_btn'} onClick={() => handleClick(subject,course["name"])}>{course["name"]}</button>
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
