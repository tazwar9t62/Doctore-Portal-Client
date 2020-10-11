import React from 'react';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            <h2 className="text-brand">Total Appointments: {appointments.length}</h2>
            {
                appointments.map(appo => <li>Name: {appo.name} Age: {appo.age}</li>)
            }
        </div>
    );
};

export default AppointmentsByDate;