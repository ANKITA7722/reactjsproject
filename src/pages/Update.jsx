import { useState, useEffect } from "react";
import axios from "axios";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    let api = "http://localhost:3000/employees";
    axios.get(api).then((res) => {
      console.log(res.data);
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const myRecDel = (id) => {
    let api = `http://localhost:3000/employees/${id}`;
    axios.delete(api).then((res) => {
      message.error("Your record successfully deleted!!!");
      loadData();
    });
  };

  const myEdit = (id) => {
    navigate(`/editrec/${id}`);
  };

  const ans = mydata.map((key) => {
    return (
      <tbody key={key.id}>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.contact}</td>
          <td>
            <a href="#" onClick={() => { myEdit(key.id) }} style={{ marginRight: '15px' }}>
              <img 
                src={editimg} 
                width="30" 
                height="30" 
                style={{ cursor: 'pointer', transform: 'scale(1.2)', transition: '0.3s' }} 
                alt="Edit"
              />
            </a>
            <a href="#" onClick={() => { myRecDel(key.id) }}>
              <img 
                src={delimg} 
                width="30" 
                height="30" 
                style={{ cursor: 'pointer', transform: 'scale(1.2)', transition: '0.3s' }} 
                alt="Delete"
              />
            </a>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
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
        Update Student Records
      </h3>
      <Table 
        striped bordered hover 
        style={{
          width: '80%', 
          margin: '0 auto', 
          border: '2px solid #ccc', 
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <thead style={{ backgroundColor: '#f7f7f7', color: '#333' }}>
          <tr style={{ fontSize: '1.1rem', fontFamily: "'Roboto', sans-serif", fontWeight: '500' }}>
            <th>Stdentno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        {ans}
      </Table>
    </>
  );
};

export default Update;
