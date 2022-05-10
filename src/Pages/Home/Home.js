import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
        </div>
    );
};

export default Home;