import React from 'react';
import ServiceImg from '../../../../assets/images/treatment.png'
import ButtonPrimary from '../../../Shared/ButtonPrimary';

const ServiceHero = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row px-32 gap-24">
                <img src={ServiceImg} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <ButtonPrimary />
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;