import { useState } from "react";
import axios from "axios";

const Search=()=>{
    const [eno,setEno]=useState("");
    const [mydata,setMydata]=useState([]);

    const handleSubmit=()=>{
        let api=`http://localhost:3000/employees/?empno=${eno}`;
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
            <h1>Employee Number : {key.empno}</h1>
            <h2>Name : {key.name}</h2>
            <h2>Email : {key.email}</h2>
            <h2>Contact No. : {key.contact}</h2>
            </>
        )
    })
    return(
        <>
            <h1>Search Employee Records</h1>
            Enter Emp no. : <input type="text" value={eno} onChange={(e)=>{
                setEno(e.target.value)}}/>
                <button onClick={handleSubmit}></button>
                <hr size="5" color="green"/>
                {ans}
        </>
    )
}
export default Search;