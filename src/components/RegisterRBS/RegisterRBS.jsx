import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterRBS = () => {
    const register = (e) => {
        e.preventDefault();
        const email = e.target.email.value; 
        const password = e.target.password.value;
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
    return (
        <Form onSubmit={(e) => register(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h3 className='text-warning my-3'>Please Register</h3>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Accept Terms and Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default RegisterRBS;