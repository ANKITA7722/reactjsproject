import { useState } from "react";
import axios from "axios";
 const SearchByName=()=>{
    const [ename, setEname]=useState("");
    const [mydata, setMydata]=useState([]);
    const handleChange=(e)=>{
        let empname=e.target.value;
        setEname(empname);
        let api=`http://localhost:3000/employees`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        let str =key.name;
        let mystatus = str.includes(ename);
        console.log(mystatus);
        if(mystatus)
        {
            return(
                <>
                    <tr>
                        <td>{key.empname}</td>
                        <td>{key.name}</td>
                        <td>{key.email}</td>
                        <td>{key.contact}</td>
                    </tr>
                </>
            )
        }
    })

    return(
        <>
        <h1>Search Employee Records</h1>
        type emp Name : <input type="text" value={ename} onChange={handleChange}/>
        <hr size="5" color="green"/>

        <table>
            <tr>
                <th>Emp No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
            {ans}
        </table>
        </>
    )
 }