import React from 'react';
import { ButtonGroup, Button, FloatingLabel, Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="side py-5">
            <div className="py-5">
                <h1>Contact us for any query</h1>
                <h3>Telephone</h3>
                <h4>+8801867629554</h4>
                <h3>E-mail</h3>
                <h4>funlearn@gmail.com</h4>
                <h3>Office address</h3>
                <h4>20,Mohakhali Road,Dhaka</h4>
            </div>
            <div className="py-5">
                <h3>Please Leave a comment so we can upgrade our services</h3>
                <FloatingLabel controlId="floatingTextarea" label="Email" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a name here" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comment">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <ButtonGroup aria-label="Basic example">
                    <Button className="submit-btn">Submit</Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default Contact;