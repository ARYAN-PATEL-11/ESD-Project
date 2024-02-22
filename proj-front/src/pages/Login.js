import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Check if both student ID and name are provided
      if (studentId && studentName) {
        const authToken = uuidv4();

        // Make an API call to check if the student with the provided ID exists
        const response = await axios.get(
          `http://localhost:8080/api/student/${studentId}/${studentName}`
        );

        sessionStorage.setItem("token", authToken);

        if (response.status === 200) {
          // Student found, store information in session storage
          sessionStorage.setItem("studentId", studentId);
          sessionStorage.setItem("studentName", studentName);

          // Navigate to the home page
          navigate("/home");
        } else {
          // Student not found, display an error message
          alert("Student not found. Please check your credentials.");
        }
      } else {
        // Handle case where either student ID or name is missing
        alert("Please provide both student ID and name.");
      }
    } catch (error) {
      // Handle API call error
      console.error("Error during login:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2>- L O G I N -</h2>
      <div>
        <label htmlFor="studentId">Student ID</label>
        <br></br>
        <input
          type="text"
          id="studentId"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
      </div>
      <div>
        <br></br>
        <label htmlFor="studentName">Student Name</label>
        <br></br>
        <input
          type="text"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </div>
      <div>
        <br></br>
        <button className="btn btn-outline-dark" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
