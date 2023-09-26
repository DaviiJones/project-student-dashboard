import React from "react";
import Studentcard from "./Studentcard";

export default function Sidebar({ studentData, handleCohortClick }) {
    return (
      <div className="sidebar">
        <h2>Student List</h2>
        <ul>
          {studentData.map((student) => (
            <li key={student.id} onClick={() => handleCohortClick(student)}>
              <Studentcard student={student} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  