import React from 'react'

export default function getLocalStorage() {
    //create local storage containing variables for "grade" and "year"
    localStorage.setItem("grade", "None");
    localStorage.setItem("year", "None");

    let allYears = {
        "FreshmanAllYears": {
            "FroshY1":{"Math":none, "English": none},
            "SophY2":{"Math":none, "English": none},
            "JuniorY3":{"Math":none, "English": none},
            "SeniorY4":{"Math":none, "English": none}
        }
    }
    localStorage.setItem("allYears", allYears);
}
