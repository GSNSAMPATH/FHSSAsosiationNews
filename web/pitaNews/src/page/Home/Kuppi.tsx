import React, { useState } from 'react';
import Navbar from '../../routs/Navebar';

const Kuppi: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

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

  const handleSubjectClick = (subject: string) => {
    setActiveSubject((prevSubject) => (prevSubject === subject ? null : subject)); // Toggle active subject
  };

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.heading}>Kuppi Page</h1>
      <div style={styles.departmentList}>
        {departments.map((department, index) => (
          <div key={index} style={styles.department}>
            <h2 style={styles.departmentName}>{department.name}</h2>
            <ul style={styles.subjectList}>
              {department.subjects.map((subject, subIndex) => (
                <li
                  key={subIndex}
                  style={styles.subject}
                  onClick={() => handleSubjectClick(subject)} // Handle subject click to show/hide years
                >
                  {subject}

                  {/* Display years only if this subject is clicked */}
                  {activeSubject === subject && (
                    <ul style={styles.yearList}>
                      {years.map((year, yearIndex) => (
                        <li key={yearIndex} style={styles.year}>
                          {year}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#f5f5f5',
    fontFamily: 'poppins',
    padding: '40px',
    paddingTop: '165px', // Space below navbar
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '32px',
    color: '#333',
  },
  departmentList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  department: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    flexShrink: 0, // Ensure department boxes don't shrink
    minHeight: '200px', // Ensure enough height for content
  },
  departmentName: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#0056b3',
  },
  subjectList: {
    listStyleType: 'none',
    paddingLeft: 0,
    maxHeight: '200px', // Adjust for scrollable list if there are too many subjects
    overflowY: 'auto', // Enable scrolling
  },
  subject: {
    backgroundColor: '#f0f0f0',
    margin: '5px 0',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  yearList: {
    listStyleType: 'none',
    paddingLeft: '20px',
    marginTop: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '4px',
  },
  year: {
    padding: '5px',
  },
};

export default Kuppi;
