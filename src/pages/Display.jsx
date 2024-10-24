import { useState ,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';



const Display=()=>{
const [empdata, setEmpdata] = useState([]);
const loadData=()=>{
    let url="http://localhost:3000/employees";
    axios.get(url).then((res)=>{
        console.log(res.data);
        setEmpdata(res.data);
    })
}
useEffect(()=>{
    loadData();
}, [])

const ans = empdata.map((key)=>{
   return(
    <>
    <tbody>
        <tr>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.contact}</td>
        </tr>
        </tbody>


    </>
   ) 
})
    return(
        <>
        <h3  style={{
          backgroundColor: "#ffcccc", 
          color: "#333", 
          textAlign: "center", 
          padding: "20px", 
          borderRadius: "8px",
          marginBottom: "20px"
        }}>Display Data</h3>
        <Table striped="columns" border={2}
        style={{
          width: '80%', 
          margin: '0 auto', 
          border: '2px solid #ccc', 
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
        }}
         >
      <thead>
        <tr>
          <th>Student no</th>
          <th> Name</th>
          <th>email</th>
          <th>contact</th>
        </tr>
      </thead>
      {ans}
      </Table>

        </>
    )
}
export default Display;