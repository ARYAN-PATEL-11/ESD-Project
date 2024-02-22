import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../layout/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // State to store information about the logged-in student
  const [loggedInStudent, setLoggedInStudent] = useState(null);
  const navigate = useNavigate();

  // Define the function outside of the useEffect
  const fetchLoggedInStudent = async () => {
    try {
      const studentId = sessionStorage.getItem("studentId");
      const response = await axios.get(
        `http://localhost:8080/student_path/${studentId}`
      );
      setLoggedInStudent(response.data);
    } catch (error) {
      console.error("Error fetching student details:", error);
      // Handle error, e.g., redirect to the login page
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    } else {
      fetchLoggedInStudent(); // Now fetchLoggedInStudent is defined
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("studentId");
    sessionStorage.removeItem("studentName");

    sessionStorage.removeItem("token");
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {loggedInStudent ? (
          <div>
            <br></br>
            <h2>Welcome, {loggedInStudent.firstname}!</h2>
            <br></br>

            <table className="table shadow">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Roll No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">CGPA</th>
                  <th scope="col">Total Credits</th>
                  <th scope="col">Domain</th>
                  <th scope="col">Specialization</th>
                  <th scope="col">Placement ID</th>
                  <th scope="col">Action</th>
                  <th scope="col">Logout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{loggedInStudent.student_id}</td>
                  <td>{loggedInStudent.roll_no}</td>
                  <td>{loggedInStudent.firstname}</td>
                  <td>{loggedInStudent.lastname}</td>
                  <td>{loggedInStudent.email}</td>
                  <td>{loggedInStudent.cgpa}</td>
                  <td>{loggedInStudent.total_credits}</td>
                  <td>{loggedInStudent.domain_id.program}</td>
                  <td>{loggedInStudent.specialization_id.name}</td>
                  <td>{loggedInStudent.placement_id}</td>
                  <td>
                    <Link
                      className="btn btn-outline-dark"
                      to={`/modifystudent/${loggedInStudent.student_id}`}
                    >
                      Modify
                    </Link>
                  </td>
                  <td>
                    {/* <Link className="btn btn-outline-secondary" to="/">
                      Logout
                    </Link> */}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Home;
