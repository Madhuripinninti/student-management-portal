// src/pages/RegisterStudent.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

const RegisterStudent = () => {
  const { addStudent } = useContext(StudentContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { id: Date.now(), name, email };
    addStudent(newStudent);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterStudent;
