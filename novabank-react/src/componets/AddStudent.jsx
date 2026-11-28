import React, { useState } from "react";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ name, age });
      setName("");
      setAge("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px" }}>
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;