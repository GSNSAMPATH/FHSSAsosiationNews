import React, { useState } from 'react';
import axios from 'axios';
import '../style/kuppiAdmin.css'
import { IoAddCircleOutline } from "react-icons/io5";
// import Kuppi from '../page/Home/Kuppi';

const kuppi: React.FC = () => {
  const [course, setCourse] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const timetableData = {
      course,
      date,
      day,
      startTime,
      endTime,
    };

    try {
      const response = await axios.post('https://your-backend-api.com/timetable/add', timetableData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setMessage('Time table added successfully');
        // Clear input fields after successful submission
        setCourse('');
        setDate('');
        setDay('');
        setStartTime('');
        setEndTime('');
      } else {
        setMessage('Failed to add time table');
      }
    } catch (error) {
      console.error('Error adding time table:', error);
      setMessage('An error occurred while adding the time table.');
    }
  };

  return (
    <div className="add-timetable-form">

      <h1>Add Time Table</h1>
      <form onSubmit={handleSubmit}>
      <div className="form-group-container">
        <div className="form-group">
          <label>Course:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Day:</label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>
          </div>
        </div>
        <div className="form-group-container">
        <div className="form-group">
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
      
    </div>
  );
};

export default kuppi;

