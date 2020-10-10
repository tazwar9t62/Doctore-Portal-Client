import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AppointmentHeader = ({handleDateChange}) => {
   
    return (
        <main style={{height: "600px"}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1 style={{color: "#3a4256"}} className="display-4">Appointment</h1>
            <Calendar
          onChange={handleDateChange}
          value={new Date()}
        />
            
           
        </div>
        <div className="col-md-6">
            <img className="img-fluid" src="https://i.ibb.co/fXt7bP1/chair.png" alt=""/>
        </div>
    </main>
    );
};

export default AppointmentHeader;