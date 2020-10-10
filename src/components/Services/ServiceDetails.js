import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:"50px"}} src={service.img} alt=""/>
            <h5 className="my-3">{service.name}</h5>
            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nesciunt.</p>
        </div>
    );
};

export default ServiceDetails;