import './allYears.css'

import React, {useEffect, useState} from 'react'

import arrow from '../../assets/Arrow 5.png'
import courseData from '../../assets/courses.json'
import { useNavigate } from "react-router-dom";

export default function Yeartwo() {
    const [grade, setGrade] = useState(localStorage.getItem('grade'));
    let subjects = courseData.Sophomore.subjects
    let courses = courseData.Sophomore.classes

    return (
        <div>
                <div>
        <div className="Headers">
          <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
        </div>
        <h3 className="headerCourseSelect" >{grade} Year 2</h3>


        <div className="courseSelect">
          {subjects.map((subject, index) => (
            <div key={index}>
              <h2 className="subject">{subject}</h2>
              <div className="courses">
              {courses[subject].map((course, index) => (
                <div key={index}>
                    <button value={subject} className="course_btn">{course}</button>
                </div>
              ))}
              </div>
            </div>
          ))}
            <input type="image" src={arrow} alt="arrow2" className="arrow2 bounce2"/>
        </div>

    </div>
    </div>
  )
}
