import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    let [selectedDate, setSelectedDate] = useState(new Date());
    
    const handleDateChange = date =>{
        setSelectedDate(date);
       
    }
    return (
        <div>
             <Calendar
          onChange={handleDateChange}
          value={new Date()}
        />
        </div>
    );
};

export default Calender;