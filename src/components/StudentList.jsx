import React, { useState } from "react";
import "./StudentList.css";

function StudentList({ selectedCohort }) {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleDropdownClick = (studentId) => {
    setSelectedStudent(studentId === selectedStudent ? null : studentId);
  };

  return (
    <div className="student-list">
      {selectedCohort.map((profile, index) => (
        <div key={index} className="student-card">
          <img
            src={profile.profilePhoto}
            alt={`${profile.names.preferredName}'s profile`}
          />
          <h2>{`${profile.names.preferredName} ${profile.names.surname}`}</h2>
          <p>Username: {profile.username}</p>
          <p>Date of Birth: {profile.dob}</p>

          <button onClick={() => handleDropdownClick(profile.id)}>
            {selectedStudent === profile.id ? "Hide Details" : "Show Details"}
          </button>

          {selectedStudent === profile.id && (
            <div className="student-details">
              {profile.codewars && (
                <>
                  <h3>Codewars:</h3>
                  <p>Total: {profile.codewars.current.total}</p>
                  <p>Last Week: {profile.codewars.current.lastWeek}</p>
                </>
              )}

              {profile.scores && (
                <>
                  <h3>Scores:</h3>
                  <p>Assignments: {profile.scores.assignments}</p>
                  <p>Projects: {profile.scores.projects}</p>
                  <p>Assessments: {profile.scores.assessments}</p>
                </>
              )}

              {profile.certifications && (
                <>
                  <h3>Certifications:</h3>
                  <p>Resume: {profile.certifications.resume ? "Yes" : "No"}</p>
                  <p>
                    LinkedIn: {profile.certifications.linkedin ? "Yes" : "No"}
                  </p>
                  <p>GitHub: {profile.certifications.github ? "Yes" : "No"}</p>
                  <p>
                    Mock Interview:{" "}
                    {profile.certifications.mockInterview ? "Yes" : "No"}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StudentList;
