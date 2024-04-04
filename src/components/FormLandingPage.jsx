import React from "react";
import Form from 'react-bootstrap/Form';

function FormLandingPage(props) {
    return (
        <Form.Group className="mb-3" controlId={props.id}>
            <Form.Label><h5>{props.label}</h5></Form.Label>
            <Form.Control className="p-2" type={props.type} onChange={props.onChange} placeholder={props.placeholder} prepend={
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <span className="fa-solid fa-envelopek"></span>
                    </div>
                </div>
            } />
        </Form.Group>
    );
}

export default FormLandingPage;
