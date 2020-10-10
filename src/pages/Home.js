import React from 'react';
import Blogs from '../components/Blogs/Blogs';
import Header from '../components/Header/Header';
import MakeAppointments from '../components/MakeAppointments/MakeAppointments';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <MakeAppointments/>
            <Testimonials/>
            <Blogs/>
        </div>
    );
};

export default Home;