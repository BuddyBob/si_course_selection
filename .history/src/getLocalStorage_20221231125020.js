import React from 'react'

export default function getLocalStorage() {
    //create local storage containing variables for "grade" and "year"
    localStorage.setItem("grade", "None");
    localStorage.setItem("year", "None");

    let allYears = {
        FreshmanAllYears: {
            Freshman:{"Math":"false", "English": "false"},
            Sophomore:{"Math":"false", "English": "false"},
            Junior:{"Math":"false", "English": "false"},
            Senior:{"Math":"false", "English": "false"}
        }
    }
    localStorage.setItem("allYears", allYears);
    console.log(allYears)
}
