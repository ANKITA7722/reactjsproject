import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { message } from "antd";

const EditData = () => {
    const { myid } = useParams();
    const [mydata, setMydata] = useState({
        empno: "",
        name: "",
        email: "",
        contact: ""
    });

    const loadData = () => {
        let api = `http://localhost:3000/employees/${myid}`;
        axios.get(api).then((res) => {
            console.log(res.data);
            setMydata(res.data);
        });
    };

    useEffect(() => {
        loadData();
    }, []); 

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setMydata(values => ({ ...values, [name]: value }));
        console.log(mydata);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        let api = `http://localhost:3000/employees/${myid}`;
        axios.put(api, mydata).then((res) => {
            message.success("Data updated successfully!");
            
            setMydata({
                empno: "",
                name: "",
                email: "",
                contact: ""
            });
        }).catch((error) => {
            message.error("Failed to update data");
        });
    };

    return (
        <>
            <div className="InsertContainer">
                <h1> Edit Employee Records :</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmpNo">
                        <Form.Label>Enter Employee Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Employee Number" name="empno" value={mydata.empno} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" name="name" value={mydata.name} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email" name="email" value={mydata.email} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContact">
                        <Form.Label>Enter Contact No.</Form.Label>
                        <Form.Control type="number" placeholder="Enter Your Contact Number" name="contact" value={mydata.contact} onChange={handleInput} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </>
    );
};

export default EditData;
