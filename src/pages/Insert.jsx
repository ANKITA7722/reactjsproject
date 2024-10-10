import axios from "axios";
import { useState } from "react";


const Insert=()=>{
const [input,setInput] = useState({});

const handleInput=(e)=>{
    let name=e.targer.name;
    let value=e.targer.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
}
const handleSubmit=()=>{
    let api="http://localhost:3000/employees";
    axios.post(api,input).then(()=>{
        console.log(res);
        alert("data dave...");
    })
}

    return(
        <>
        <h1>insert data</h1>
        Enetr Employee No. : <input type="text" name="empno" onChange={handleInput}/>
        <br/>
         Enter name. : <input type="text" name="name" onChange={handleInput}/>
        <br/>
        Enetr email : <input type="text" name="email" onChange={handleInput}/>
        <br/>
        Enetr contact no. : <input type="text" name="contact" onChange={handleInput}/>
        <br/>
        <button onClick={handleSubmit}>Save!!!</button>
        </>
    )
}
export default Insert;