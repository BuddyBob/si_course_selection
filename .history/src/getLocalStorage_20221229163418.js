import React from 'react'

export default function getLocalStorage() {
    //create local storage containing variables for "grade" and "year"
    localStorage.setItem("grade", "None");
    localStorage.setItem("year", "None");

    let allYears = {
        "FreshmanAllYears": {
            "FroshY1":{"Math":false, "English": false},
            "SophY2":{"Math":false, "English": false},
            "JuniorY3":{"Math":false, "English": false},
            "SeniorY4":{"Math":false, "English": false}
        }
    }
    localStorage.setItem("allYears", allYears);
}
