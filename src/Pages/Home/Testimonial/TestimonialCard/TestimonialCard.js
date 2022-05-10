import React from 'react';

const TestimonialCard = ({ testimonil }) => {
    const { name, comment, img, country } = testimonil;
    return (
        <div class="card w-full bg-base-100 p-5">
            <p>{comment}</p>
            <div className='flex items-center mt-9'>
                <div className='bg-secondary p-1 rounded-full'>
                    <img className='bg-white p-1 rounded-full' src={img} alt="" />
                </div>
                <div className='ml-4'>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <h3>{country}</h3>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;