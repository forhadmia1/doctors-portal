import React from 'react';
import qoutes from '../../../assets/icons/quote.svg'
import profile1 from '../../../assets/images/people1.png'
import profile2 from '../../../assets/images/people2.png'
import profile3 from '../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard/TestimonialCard';

const testimonials = [
    {
        id: 1,
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here',
        name: 'jhon smith',
        country: 'New-york',
        img: profile1
    },
    {
        id: 2,
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here',
        name: 'Lora',
        country: 'Alabama',
        img: profile2
    },
    {
        id: 3,
        comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here',
        name: 'Selena',
        country: 'California',
        img: profile3
    },
]

const Testimonial = () => {
    return (
        <section className='my-24 p-5'>
            <div className='container mx-auto flex justify-between'>
                <div>
                    <h3 className='text-secondary text-xl font-semibold'>Testimonial</h3>
                    <h2 className='text-3xl'>What our patients says</h2>
                </div>
                <div>
                    <img className='w-40' src={qoutes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mt-16'>
                {
                    testimonials.map(testimonil => <TestimonialCard
                        key={testimonil.id}
                        testimonil={testimonil}
                    />)
                }
            </div>
        </section>
    );
};

export default Testimonial;