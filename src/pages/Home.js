import React from 'react';
import Header from '../components/Header/Header';
import MakeAppointments from '../components/MakeAppointments/MakeAppointments';
import Services from '../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <MakeAppointments/>
        </div>
    );
};

export default Home;