// import React, { useState, useEffect } from 'react';
// import './App.css';

// interface TimeTableEntry {
//   subject: string;
//   startTime: string;
//   endTime: string;
//   date: string;
// }

// const Timetable: React.FC = () => {
//   const [timetable, setTimetable] = useState<TimeTableEntry[]>([]);

//   // Simulate fetch data from API
//   const fetchTimetableData = async () => {
//     // Replace with actual API call
//     const data = [
//       { subject: 'Math', startTime: '09:00', endTime: '10:00', date: '2024-09-25' },
//       { subject: 'Science', startTime: '10:30', endTime: '11:30', date: '2024-09-25' },
//       { subject: 'History', startTime: '12:00', endTime: '13:00', date: '2024-09-26' },
//     ];
//     setTimetable(data);
//   };

//   useEffect(() => {
//     fetchTimetableData();
//   }, []);

//   return (
//     <div>
//       <h1>Automatic Timetable</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Subject</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {timetable.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.date}</td>
//               <td>{entry.subject}</td>
//               <td>{entry.startTime}</td>
//               <td>{entry.endTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Timetable;

import React from 'react';
import YouTubePlayer from '../src/components/Youtube';

const App: React.FC = () => {
  return (
    <div className="App">
      <YouTubePlayer />
    </div>
  );
};

export default App;
