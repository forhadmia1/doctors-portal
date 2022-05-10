import React from 'react';
import ServiceImg from '../../../../assets/images/treatment.png'
import ButtonPrimary from '../../../Shared/ButtonPrimary';

const ServiceHero = () => {
    return (
        <div class="hero min-h-screen md:mt-32 md:px-32 ">
            <div class="hero-content flex-col lg:flex-row gap-24">
                <img src={ServiceImg} class="w-full md:max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary>get started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;