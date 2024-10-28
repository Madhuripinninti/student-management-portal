// src/pages/StudentList.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
