import React, { useState } from 'react';
import AppointmentHeader from '../components/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../components/AppointmentHeader/BookAppointment';
import Footer from '../components/Footer/Footer';
import NavHeader from '../components/NavHeader/NavHeader';
const Appointment = () => {
    let [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date =>{
        setSelectedDate(date);
    }
    return (
        <div>
           <NavHeader/>
           <AppointmentHeader handleDateChange={handleDateChange}  />
           <BookAppointment date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default Appointment;