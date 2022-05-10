import React from 'react';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;