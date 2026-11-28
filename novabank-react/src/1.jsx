import React, { useState } from "react";
import AddStudent from "./componets/AddStudent";
import StudentList from "./componets/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Student Management</h1>
      <AddStudent addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;