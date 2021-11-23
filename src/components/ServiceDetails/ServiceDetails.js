import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const handleClick = () => {
        history.push('/Services');
    }
    return (
        <div>
            <h3>The courses we are providing are completely free . </h3>
            <p>All the courses are from google and many knowned universities around the  world. For more details email us directly.</p>
            <button className="btn" onClick={handleClick}>See All services</button>
        </div>
    );
};

export default ServiceDetails;