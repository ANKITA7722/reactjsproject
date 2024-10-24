import axios from "axios";
import { useState, useEffect } from "react";

const SearchByName = () => {
  const [ename, setEname] = useState("");
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (ename.trim() === "") {
        setMyData([]);
        return;
      }

      let api = "http://localhost:3000/employees";
      try {
        const res = await axios.get(api);
        setMyData(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [ename]);

  const handleChange = (e) => {
    setEname(e.target.value);
  };

  const filteredData = mydata.filter((key) =>
    key.name.toLowerCase().includes(ename.toLowerCase())
  );

  const ans =
    filteredData.length > 0 ? (
      filteredData.map((key) => (
        <tr key={key.empno}>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.contact}</td>
        </tr>
      ))
    ) : (
      <tr>
        {/* <td colSpan="4" style={{ textAlign: "center" }}>No Employee Found</td> */}
      </tr>
    );

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
          Search Student Records
        </h3>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter Student Name"
            value={ename}
            onChange={handleChange}
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
        <hr size="4" color="green" style={{ width: "80%" }} />
        <table
          style={{
            width: "80%",
            borderCollapse: "collapse",
            marginTop: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                textAlign: "left",
              }}
            >
              <th style={{ padding: "12px" }}>Student No</th>
              <th style={{ padding: "12px" }}>Name</th>
              <th style={{ padding: "12px" }}>Email</th>
              <th style={{ padding: "12px" }}>Contact</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
      </center>
    </>
  );
};

export default SearchByName;
