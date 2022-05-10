import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const cards = [
    {
        id: 1,
        title: 'Opening hours',
        img: clock,
        description: 'Click the button to listen on Spotiwhy app.',
        bgColor: 'bg-gradient-to-r from-secondary to-primary'
    },
    {
        id: 2,
        title: 'Opening hours',
        img: marker,
        description: 'Click the button to listen on Spotiwhy app.',
        bgColor: 'bg-accent'
    },
    {
        id: 3,
        title: 'Opening hours',
        img: phone,
        description: 'Click the button to listen on Spotiwhy app.',
        bgColor: 'bg-gradient-to-r from-secondary to-primary'
    }
]

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
            {
                cards.map(card => <InfoCard
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    );
};

export default Info;