import React, { useState } from 'react';
import Navbar from '../../routs/Navebar';

const Kuppi: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);
  const [hoveredSubject, setHoveredSubject] = useState<string | null>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null); // Track active year

  const departments = [
    { name: 'Department of Anthropology', subjects: ['Anthropology'] },
    { name: 'Department of Criminology and Criminal Justice', subjects: ['Criminology and Criminal Justice'] },
    { name: 'Department of Economics', subjects: ['Economics'] },
    { name: 'Department of English And Linguistics', subjects: ['Teaching English as a Second Language', 'English'] },
    { name: 'Department of English Language Teaching', subjects: ['1st Year', '2nd Year', '3rd Year', 'Diploma Course'] },
    { name: 'Department of Geography', subjects: ['Geography', 'B.Sc. in Geospatial Technology'] },
    { name: 'Department of History and Archaeology', subjects: ['History', 'Archaeology'] },
    { name: 'Department of Information and Communication Technology', subjects: ['Information Technology'] },
    { name: 'Department of Languages, Cultural Studies and Performing Arts', subjects: ['Chinese', 'Dance and Cultural Studies', 'Drama and Theatre', 'French', 'Hindi', 'Japanese', 'Sanskrit'] },
    { name: 'Department of Music and Creative Technology', subjects: ['Music', 'Creative Music Technology and Production'] },
    { name: 'Department of Pali and Buddhist Studies', subjects: ['Pali', 'Buddhist Civilization', 'Buddhist Philosophy', 'Buddhist Heritage and Tourism'] },
    { name: 'Department of Philosophy and Psychology', subjects: ['Philosophy', 'Psychology'] },
    { name: 'Department of Political Science', subjects: ['Political Science'] },
    { name: 'Department of Sinhala and Mass Communication', subjects: ['Sinhala', 'Mass Communication'] },
    { name: 'Department of Social Statistics', subjects: ['Statistics'] },
    { name: 'Department of Sociology', subjects: ['Sociology'] }
  ];

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']; // Define years array

  const handleSubjectClick = (subject: string) => {
    setActiveSubject((prevSubject) => (prevSubject === subject ? null : subject)); // Toggle active subject
  };

  const handleYearClick = (yearIndex: number) => {
    setActiveYear((prevYear) => (prevYear === yearIndex ? null : yearIndex)); // Toggle active year
  };

  const semesters = ['1st Semester', '2nd Semester'];

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>Kuppi Time Table</h1>
      <div style={styles.departmentListContainer}>
        {departments.map((department, index) => {
          const [showMore, setShowMore] = useState(false); // Manage show more state per department

          return (
            <div key={index} style={styles.departmentContainer}>
              <h2 style={styles.departmentName}>{department.name}</h2>
              <ul style={styles.subjectList}>
                {department.subjects.slice(0, showMore ? department.subjects.length : 2).map((subject, subIndex) => (
                  <li key={subIndex} style={styles.subject}>
                    <h3
                      onClick={() => handleSubjectClick(subject)} // Handle subject click to show/hide years
                      onMouseEnter={() => setHoveredSubject(subject)}
                      onMouseLeave={() => setHoveredSubject(null)}
                      style={{
                        ...styles.subjectName,
                        color: hoveredSubject === subject ? '#ff5722' : '#0056b3', // Change color on hover
                      }}
                    >
                      {subject}
                    </h3>

                    {/* Display years only if this subject is clicked */}
                    {activeSubject === subject && (
                      <ul style={styles.yearList}>
                        {years.map((year, yearIndex) => (
                          <li
                            key={yearIndex}
                            onMouseEnter={() => setHoveredYear(yearIndex)}
                            onMouseLeave={() => setHoveredYear(null)}
                            onClick={() => handleYearClick(yearIndex)} // Handle year click
                            style={{
                              ...styles.year,
                              backgroundColor: hoveredYear === yearIndex ? '#d9edf7' : 'transparent', // Change background on hover
                            }}
                          >
                            {year}
                            {/* Display semesters only if this year is clicked */}
                            {activeYear === yearIndex && (
                              <ul style={styles.semesterList}>
                                {semesters.map((semester, semesterIndex) => (
                                  <li key={semesterIndex} style={styles.semester}>
                                    {semester}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
                {/* Show More / Show Less Button */}
                {department.subjects.length > 2 && (
                  <button onClick={() => setShowMore(!showMore)} style={styles.showMoreButton}>
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#e8f0fe', // Light background color
    fontFamily: 'poppins',
    padding: '40px',
    paddingTop: '165px', // Space below navbar
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '36px',
    color: '#003366', // Dark blue for heading
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  departmentListContainer: {
    display: 'flex',
    flexDirection: 'column', // Vertical alignment for departments
    alignItems: 'flex-start', // Align to the left
    paddingLeft: '20px', // Add some left padding
  },
  departmentContainer: {
    margin: '15px 0',
    backgroundColor: '#ffffff', // White background for department containers
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    padding: '15px',
    width: '100%', // Full width for departments
  },
  departmentName: {
    fontSize: '26px',
    color: '#0056b3',
    borderBottom: '2px solid #0056b3', // Underline effect
    paddingBottom: '5px',
  },
  subjectList: {
    listStyleType: 'none',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align to the left
    paddingLeft: '20px', // Indentation for subject list
  },
  subject: {
    margin: '10px 0',
  },
  subjectName: {
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  yearList: {
    listStyleType: 'none',
    paddingLeft: '20px',
    marginTop: '10px',
    backgroundColor: '#f1f1f1',
    borderRadius: '4px',
  },
  year: {
    padding: '8px',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  semesterList: {
    listStyleType: 'none',
    paddingLeft: '20px',
    marginTop: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px',
  },
  semester: {
    padding: '5px',
    fontSize: '14px',
  },
  showMoreButton: {
    marginTop: '10px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Kuppi;
