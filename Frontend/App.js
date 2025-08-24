import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Frontend Running with Backend + MySQL</h1>
      <ul>
        {students.map((s, index) => (
          <li key={index}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
