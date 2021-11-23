import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AfiaNahian/fakedata-educational-website/main/course.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="container-fluid bg-black text-white mb-5  py-5">
                <h1>Services We are providing</h1>
            </div>
            <div className="container py-3 my-3">
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;