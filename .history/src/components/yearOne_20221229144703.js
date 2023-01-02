import './allYears.css'

import React, {useState} from 'react'

import courseData from '../assets/courses.json'

export default function Yearone() {
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  let subjects = courseData.Freshman.subjects
  return (
    <div>
        <div className="Headers">
          <h1 className="titleCourseSelect" >SI Course Selection  All Years </h1>
          <h3 className="headerCourseSelect" >{grade} year 1</h3>
        </div>


        <div>
          {courses.map((subject, index) => (
            <div key={index}>
              <h2>{subject}</h2>
              
              {/* loop over the pets */}
                <div>
                  {classes[subject].map((class_level,i) => (
                    <p key={i}>
                      {class_level}
                    </p>
                  ))}
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}
