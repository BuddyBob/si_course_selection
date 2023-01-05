import '../courseSelection.css'

import React, {useEffect, useState} from 'react'

import arrow from '../../assets/Arrow 5.png'
import courseData from '../../assets/courses.json'
import { useNavigate } from "react-router-dom";

export default function Yeartwo() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  const [preview, setPreview] = useState(false);
  let grades = Object.keys(courseData)
  let nextGrade = grades[Object.keys(courseData).indexOf(grade)+1]
  let subjects = courseData[nextGrade].subjects
  let courses = courseData[nextGrade].classes

function coursePreview(e) { 
  e.preventDefault();
  console.log('hovered')
  setPreview(true)
}

    return (
        <div className="courseSelect">

          {subjects.map((subject, index) => (

            <div key={index}>
              <h2 className="subject">{subject}</h2>
              <div className="courses">

              {courses[subject].map((course, index) => (

                <div key={index}>
                    <button value={subject} className="course_btn" onMouseEnter={() => setPreview(true)} onMouseLeave={() => setPreview(false)}>{course}</button>
                    {preview && <div className="preview"> {course} </div>}

                </div>
              ))}
              </div>
            </div>
          ))}
        </div>

  )
}
