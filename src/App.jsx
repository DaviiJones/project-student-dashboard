import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Studentcard from "./components/Studentcard"
import data from "./data/data.json"

const studentData = data;

function App(){
    const [selectedCohort, setSelectedCohort] = useState(null);

    const handleCohortClick = (cohort) => {
      setSelectedCohort(cohort);
    };
  
return(
    <div>
        <Navbar/>
        
        <Sidebar studentData={studentData}
         selectedCohort={selectedCohort}
         setSelectedCohort={setSelectedCohort}
         handleCohortClick={handleCohortClick}/>
        <Studentcard/>
    </div>
)
}
export default App;