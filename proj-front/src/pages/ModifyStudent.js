import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ModifyStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [domains, setDomains] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    photograph_path: "",
    roll_no: "",
    total_credits: "",
    cgpa: "",
    domain_id: "",
    specialization_id: "",
  });

  const {
    firstname,
    lastname,
    email,
    photograph_path,
    roll_no,
    total_credits,
    cgpa,
    domain_id,
    specialization_id,
  } = student;

  useEffect(() => {
    axios
      .get("http://localhost:8080/domain_path_get")
      .then((response) => {
        console.log("Fetched domains successfully:", response.data);
        setDomains(response.data);
      })
      .catch((error) => {
        console.error("Error fetching domains:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/specialization_path_get")
      .then((response) => {
        console.log("Fetched specializations successfully:", response.data);
        setSpecializations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching specializations:", error);
      });
  }, []);

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedData = {
        cgpa,
        email,
        firstname,
        lastname,
        photograph_path,
        roll_no,
        total_credits,
        placement_id: 1, 
        domain_id: {
          domain_id: student.domain_id, 
        },
        specialization_id: {
          specialization_id: student.specialization_id, 
        },
      };

      await axios.put(`http://localhost:8080/student_path/${id}`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      navigate("/home");
    } catch (error) {
      console.error("Error updating student details:", error);
      // Handle error, e.g., show an error message
    }
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student_path/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 mb-2 shadow bg">
          <h2 className="text-center m-4">Modify User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="firstname" className="form-label">
                First_Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your first name"
                name="firstname"
                value={firstname}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="lastname" className="form-label">
                Last_Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your last name"
                name="lastname"
                value={lastname}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="roll_no" className="form-label">
                Roll_no
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your roll_no"
                name="roll_no"
                value={roll_no}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="total_credits" className="form-label">
                Total_Credits
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your total_credits"
                name="total_credits"
                value={total_credits}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="cgpa" className="form-label">
                CGPA
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your cgpa"
                name="cgpa"
                value={cgpa}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="photograph" className="form-label">
                Photograph
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your photo url"
                name="photograph_path"
                value={photograph_path}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>

            <div className="mb-3">
              <label>
                Domain
                <br></br>
                <select
                  name="domain_id"
                  value={student.domain_id}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select a domain</option>
                  {domains.map((domain) => (
                    <option key={domain.domain_id} value={domain.domain_id}>
                      {domain.program}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mb-3">
              <label>
                Specialization
                <br></br>
                <select
                  name="specialization_id"
                  value={student.specializationid}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="">Select a specialization</option>
                  {specializations.map((specialization) => (
                    <option
                      key={specialization.specialization_id}
                      value={specialization.specialization_id}
                    >
                      {specialization.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button type="submit" className="btn btn-outline-dark">
              Submit
            </button>
            <Link className="btn btn-outline-secondary mx-5" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
