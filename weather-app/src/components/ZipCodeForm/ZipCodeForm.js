import React, { useState } from "react";
import { Form, Button, Row, Col, Badge } from "react-bootstrap";
import './ZipCodeForm.css';

const ZipCodeForm = ({ submit }) => {
    const [zipCodes, setZipCodes] = useState([]);
    const [newZipCode, setNewZipCode] = useState('');

    const handleAddZipCode = (event) => {
        event.preventDefault();
        if (zipCodes.length < 3 && newZipCode) {
            setZipCodes([...zipCodes, newZipCode]);

        }
        setNewZipCode('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submit(zipCodes);
    };

    const handleRemoveZipCode = (index) => {
        const newZipCodes = [...zipCodes];
        newZipCodes.splice(index, 1);
        setZipCodes(newZipCodes);
    };

    const handleRemove = (zipToRemove) => {
        setZipCodes(zipCodes.filter((zip) => zip !== zipToRemove));
    };

    const handleChange = (event, index) => {
        const code = event.target.value;
        setNewZipCode(code);
    };

    return (
        <>
            <Form  onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="zipCode1">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="number" placeholder="Enter zip code" value={newZipCode} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-3 mx-1">
                    <Button className='btn-sm' style={{ 'backgroundColor': '#4c2948', 'borderColor': '#4c2948' }} onClick={handleAddZipCode}>
                        Add Zip Code
                    </Button>
                </Row>
                <Row className="mt-3 mx-1">
                    <Button className='btn-sm' style={{ 'backgroundColor': '#4c2948', 'borderColor': '#4c2948' }} type="submit" disabled={!zipCodes.length}>
                        Submit
                    </Button>
                </Row>
            </Form>
            <div className="mt-4">
                {zipCodes.map((zip, index) => (
                    zip &&
                    <span style={{ 'backgroundColor': '#4c2948', 'borderColor': '#4c2948', 'color': '#fff', 'padding': '15px 0 15px 15px', 'borderRadius': '25px', 'margin': '10px' }} key={index} className="mt-2">
                        {zip}
                        <Button

                            style={{ 'backgroundColor': '#4c2948', 'borderColor': '#4c2948', 'color': '#fff', 'paddingBottom': '10px', 'marginLeft': '15px' }}
                            size="xs"
                            onClick={() => handleRemove(zip)}
                        >
                            X
                        </Button>
                    </span>
                ))}
            </div>
        </>


    );
};

export default ZipCodeForm;