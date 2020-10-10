  
import React from 'react';

import './MakeAppointments.css'

const MakeAppointments = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src="https://i.ibb.co/x2S8VwC/doctor.png" alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 style={{color:"#1cc7c1"}} className=" text-uppercase ">Appointment</h5>
                        <h1 className="my-4">Make an Appointment <br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-main text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointments;