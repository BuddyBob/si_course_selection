import React from 'react'

export default function getLocalStorage() {
    //create local storage containing variables for "grade" and "year"
    localStorage.setItem("grade", "None");
    localStorage.setItem("year", "None");
}
