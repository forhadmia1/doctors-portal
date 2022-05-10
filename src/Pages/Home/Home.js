import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
        </div>
    );
};

export default Home;