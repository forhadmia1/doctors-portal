import React from 'react';
import service1 from '../../../assets/images/fluoride.png'
import service2 from '../../../assets/images/cavity.png'
import service3 from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard/ServiceCard';
import ServiceHero from './ServiceHero/ServiceHero';

const servicesCard = [
    {
        id: 1,
        title: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: service1
    },
    {
        id: 2,
        title: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: service2
    },
    {
        id: 3,
        title: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: service3
    }
]

const Services = () => {
    return (
        <div className='my-28'>
            <div>
                <h3 className='text-xl text-primary text-center font-semibold'>Our Services</h3>
                <h2 className='text-center text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mt-24'>
                {
                    servicesCard.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
            <ServiceHero />
        </div>
    );
};

export default Services;