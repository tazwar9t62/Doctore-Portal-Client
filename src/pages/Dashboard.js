import React, { useEffect, useState } from 'react';
import AppointmentsByDate from '../components/AppointmentsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../components/Sidebar/Sidebar';

const Dashboard = () => {
    let [selectedDate, setSelectedDate] = useState(new Date());
    let [appointments, setAppointments] = useState([]);
    const handleDateChange = date =>{
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch("http://localhost:5000/appointmentsByDate", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({date: selectedDate})
        })
        .then(response => response.json())
        .then(result => setAppointments(result))
    }, [selectedDate])
    return (
        <section>
            <div style={{backgroundColor:"#F4FDFB" , height:"100%"}} className="container-fluid row pt-5">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-5">
                <Calendar
          onChange={handleDateChange}
          value={new Date()}
        />
                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;