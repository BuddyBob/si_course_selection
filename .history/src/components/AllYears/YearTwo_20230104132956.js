import '../courseSelection.css'

import React, {useEffect, useState} from 'react'

import arrow from '../../assets/Arrow 5.png'
import courseData from '../../assets/courses.json'
import { useNavigate } from "react-router-dom";

export default function Yeartwo() {
  let navigate = useNavigate();
  const [grade, setGrade] = useState(localStorage.getItem('grade'));
  const [preview, setPreview] = useState(false);
  let grades = Object.keys(courseData)
  let nextGrade = grades[Object.keys(courseData).indexOf(grade)+1]
  let subjects = courseData[nextGrade].subjects
  let courses = courseData[nextGrade].classes
  


function courseSelect(e) {
  let userCourse = e.target.innerHTML
  let userSubject = e.target.value


}


function nextPage() {
    //make sure not a senior
  if (grade !== "Junior"){
    navigate("/yearthree");
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
          <h1 className="titleCourseSelect" >All Years - {nextGrade} </h1>
        </div>


        <div className="courseSelect">
          {subjects.map((subject, index) => (
            <div key={index}>
              <h2 className="subject">{subject}</h2>
              <div className="courses">
              {courses[subject].map((course, index) => (
                <div key={index}>
                    <button value={subject} className="course_btn" onMouseOVer={() => setPreview(true)}onClick={(e) => courseSelect(e)}>{course}</button>
                    {/* if preview becomes true, then show white box next ot course_btn */}
                    {preview && <div className="preview" style={{display: "flex", flexDirection: "column", border: "1px solid black", width: "150px", height: "150px", position: "absolute", top: "0", left: "0"}}> 
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
                        <h1 style={{fontSize: "20px", fontWeight: "bold"}}>Course Name</h1>
                        <button style={{width: "20px", height: "20px", borderRadius: "10px", border: "1px solid black"}}>x</button>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
                        <h1 style={{fontSize: "20px", fontWeight: "bold"}}>Course Name</h1>
                        <button style={{width: "20px", height: "20px", borderRadius: "10px", border: "1px solid black"}}>x</button>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
                        <h1 style={{fontSize: "20px", fontWeight: "bold"}}>Course Name</h1>
                        <button style={{width: "20px", height: "20px", borderRadius: "10px", border: "1px solid black"}}>x</button>
                      </div>
                      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "10px"}}>
                        <h1 style={{fontSize: "20px", fontWeight: "bold"}}>Course Name</h1>
                        <button style={{width: "20px", height: "20px", borderRadius: "10px", border: "1px solid black"}}>x</button>
                      </div>
                    </div>}
                    


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
