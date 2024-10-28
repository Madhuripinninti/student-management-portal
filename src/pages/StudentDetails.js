// src/pages/StudentDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

const StudentDetails = () => {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find(s => s.id === parseInt(id));

  return (
    <div>
      <h1>Student Details</h1>
      {student ? (
        <div>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
        </div>
      ) : (
        <p>Student not found</p>
      )}
    </div>
  );
};

export default StudentDetails;
