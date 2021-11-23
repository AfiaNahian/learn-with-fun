import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, school, ratings, image, coursetype, enrolledstudent } = props.service;
    const history = useHistory();
    const handleSClick = () => {
        history.push(`/service/${id}`);
    }
    return (
        <div>
            <Col>
                <Card className="shadow" style={{ height: '480px' }}>
                    <div>
                        <Card.Img style={{ height: '150px' }} variant="top" src={image} />
                    </div>
                    <div>
                        <Card.Body style={{ height: '270px' }} className="fw-bold">
                            <Card.Title className="text-secondary">{name}</Card.Title>
                            <p className="text-success">Arranged by : {school}</p>
                            <p className="text-success">Course for {coursetype}</p>
                            <p className="text-success">Ratings : {ratings}</p>
                            <p className="text-success">Students Enrolled : {enrolledstudent}</p>
                        </Card.Body>
                    </div>
                    <div>
                        <button onClick={handleSClick} className="btn">Details</button>
                    </div>
                </Card>

            </Col>
        </div>
    );
};

export default Service;