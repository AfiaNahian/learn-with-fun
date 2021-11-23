import React, { useEffect, useState } from 'react';
import { Row, Accordion } from 'react-bootstrap';
import Service from '../Service/Service';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/AfiaNahian/fakedata-educational-website/main/course.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="py-5 container-fluid text-white bg-black">
                <h1>Welcome to funLearn Academy</h1>
                <p>We work to provide you free education from different sources. As the world is growing day by day , we also need to prepare ourselves for the future compitative</p>
            </div>
            <section>
                <h1 className="fw-bold py-5">Our popular Courses</h1>
                <div className="container py-3 my-3">
                    <Row xs={1} md={3} className="g-3">
                        {
                            services.slice(0, 4).map(service => <Service service={service}></Service>)
                        }
                    </Row>
                </div>
            </section>
            <section className="container py-3 my-5">
                <h1 className="fw-bold py-5">Frequently asked questions</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why you need to learn web development?</Accordion.Header>
                        <Accordion.Body>
                            Maybe you are in a confusion about starting a career in web development, or have no idea about the field. Either way, there are strong reasons for a graduate from computer science and engineering background to start their career in web development. Web development is a growing area and according to estimates, there are close to a million web development jobs in the present.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What makes a good web developer?</Accordion.Header>
                        <Accordion.Body>
                            Here’s what hiring managers are looking for:
                            The skillset. You’ll need to have a great grasp of the programming languages and frameworks to get around in your job.
                            Ability to solve problems. All developers solve problems every day. A great web developer knows how to figure out the direction the solution to a problem needs to take.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What education or experience do I need to get into web development?</Accordion.Header>
                        <Accordion.Body>
                            You don’t need a university degree to be a web developer, or any programmer for that matter. But it certainly doesn’t hurt. Universities offer more structure and a smoother learning experience than teaching yourself everything. But costs of attending a university could be a blocker for many.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default Home;