import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card bg-base-100 shadow-md">
            <div class="card-body">
                <h2 class="text-center font-semibold text-xl text-secondary">{name}</h2>
                <p className='text-center text-lg'>{slots.length ? slots[0] : "Try another day"}</p>
                <p className='text-center text-lg'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div class="card-actions justify-center">
                    <button class="btn text-white bg-gradient-to-r from-secondary to-primary border-0" disabled={slots.length === 0}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;