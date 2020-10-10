import React from 'react';
import ServiceDetails from './ServiceDetails';

const Services = () => {

  const  servicesData  = [{
      name:"Fluoride Treatment",
      img: "https://i.ibb.co/n7F1X93/fluoride.png"
    },
    {
        name:"Cavity Filling",
        img: "https://i.ibb.co/r6Ydv70/cavity.png"
      },
      {
        name:"Teeth Whitening",
        img: "https://i.ibb.co/6NLyY2y/whitening.png"
      },
];

    return (
       <section className="service-container mt-5">
           <div className="text-center">
               <h5 style={{color: '#1cc7c1'}}>OUR SERVICES</h5>
               <h2 style={{color: '#3a4256'}}>Services We Provide</h2>
           </div>
           <div className="d-flex justify-content-center">
           <div className="row w-75 mt-5 pt-5">
           {servicesData.map(service => <ServiceDetails service={service}></ServiceDetails>)}
           </div>
        </div>
       </section>
    );
};

export default Services;