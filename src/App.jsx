import React, { useEffect, useState } from "react";
import Cohorts from "./components/Cohorts";
import Navbar from "./components/Navbar";
import data from "./data/data.json";
import StudentList from "./components/StudentList";


function App() {
  const [cohortCodes, setCohortCodes] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleButtonClick = (cohortCode) => {
    const matchingProfiles = data.filter(
      (profile) => profile.cohort.cohortCode === cohortCode
    );
    if (matchingProfiles.length > 0) {
      setSelectedCohort(matchingProfiles);
    } else {
      setSelectedCohort([]);
    }
  };
  
  const handleDropdownClick = (studentId) => {
    setSelectedStudent(studentId === selectedStudent ? null : studentId);
  };
  

  useEffect(() => {
    
    const uniqueCohortCodes = new Set();

    data.forEach((obj) => {
      if (obj.cohort && obj.cohort.cohortCode) {
        uniqueCohortCodes.add(obj.cohort.cohortCode);
      }
    });

    
    setCohortCodes(Array.from(uniqueCohortCodes));
  }, []);

  return (
    <div className="appContainer">
      <Navbar />

      <Cohorts
        cohortCodes={cohortCodes}
        handleButtonClick={handleButtonClick}
      />

      <StudentList
        selectedCohort={selectedCohort}
        selectedStudent={selectedStudent}
        handleDropdownClick={handleDropdownClick}
      />
    </div>
  );
}

export default App;
