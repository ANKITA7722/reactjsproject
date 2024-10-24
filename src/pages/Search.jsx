import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const [eno, setEno] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleSubmit = () => {
    let api = `http://localhost:3000/employees/?empno=${eno}`;
    axios.get(api).then((res) => {
      setMydata(res.data);
      console.log(res.data);
      if (res.data.length === 0) {
        toast.error("No record found", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    });
  };

  const ans = mydata.map((key) => {
    return (
      <div key={key.empno} style={{ marginBottom: "20px" }}>
        <h3>Student Number: {key.empno}</h3>
        <h3> Student Name: {key.name}</h3>
        <h3>Email: {key.email}</h3>
        <h3>Contact No.: {key.contact}</h3>
      </div>
    );
  });

  return (
    <>
      <center>
        <h3
          style={{
            backgroundColor: "#ff9999",
            color: "#fff",
            textAlign: "center",
            padding: "15px 30px",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          Search Student by Number
        </h3>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            value={eno}
            onChange={(e) => {
              setEno(e.target.value);
            }}
            placeholder="Enter Student No."
            style={{
              padding: "10px 15px",
              width: "250px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            }}
          />
        </div>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Submit
        </button>
        <hr size="5" color="green" style={{ width: "80%" }} />
        <div style={{ textAlign: "left", width: "60%", margin: "auto" }}>
          {ans.length > 0 ? (
            ans
          ) : (
            <p style={{ color: "#999", fontStyle: "italic" }}>
              No data to display
            </p>
          )}
        </div>
        <hr size="5" color="green" style={{ width: "80%" }} />
        <ToastContainer />
      </center>
    </>
  );
};

export default Search;
