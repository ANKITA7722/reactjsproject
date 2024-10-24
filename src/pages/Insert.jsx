
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';

const Insert = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        let name = e.target.name;  
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        let api = "http://localhost:3000/employees";
        
        axios.post(api, input)
            .then((res) => {
                console.log(res);
                toast("Data saved successfully");
                
            
            })
            .catch((error) => {
                console.error("There was an error connecting to the server:", error);
                alert("Failed to save data. Please check the connection.");
            });
    };

    return (
        <>
        <div className="InsertContainer">
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Enter  Number</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter  Number" 
                name="empno" 
                onChange={handleInput} 
                style={{
                    borderRadius: '8px', 
                    border: '1px solid #ccc',
                    padding: '10px'
                }} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Enter Student Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter Your Name" 
                name="name" 
                onChange={handleInput}
                style={{
                    borderRadius: '8px', 
                    border: '1px solid #ccc',
                    padding: '10px'
                }} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Enter Student Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter Your Email" 
                name="email" 
                onChange={handleInput} 
                style={{
                    borderRadius: '8px', 
                    border: '1px solid #ccc',
                    padding: '10px'
                }} 
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label style={{ color: '#333', fontWeight: 'bold' }}>Enter Contact No.</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Enter Your Contact Number" 
                name="contact" 
                onChange={handleInput} 
                style={{
                    borderRadius: '8px', 
                    border: '1px solid #ccc',
                    padding: '10px'
                }} 
            />
        </Form.Group>

        <Button 
            variant="primary" 
            type="submit" 
            style={{ 
                backgroundColor: '#4CAF50',
                border: 'none', 
                padding: '12px 20px', 
                borderRadius: '8px', 
                fontSize: '16px',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'} 
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'} 
        >
            Submit
        </Button>
    </Form>
    <ToastContainer />
</div>

        </>
    );
};

export default Insert;
