import React from 'react';
import chair from '../../assets/images/chair.png'
import ButtonPrimary from '../Shared/ButtonPrimary';

const Banner = () => {
    return (
        <div className="hero min-h-screen container mx-auto bg-[url('/src/assets/images/bg.png')] bg-cover">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="w-full md:max-w-xl rounded-lg" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>get started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;