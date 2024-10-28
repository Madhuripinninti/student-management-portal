import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentForm = () => {
  const { setStudents } = useContext(StudentContext);
  const [studentName, setStudentName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add student logic here
  };

  return (
    <div className="form-container">
      <h2>Register Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
};

export default StudentForm;
