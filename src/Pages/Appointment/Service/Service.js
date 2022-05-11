import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <h2 className="text-center font-semibold text-xl text-secondary">{name}</h2>
                <p className='text-center text-lg'>{slots.length ? slots[0] : "Try another day"}</p>
                <p className='text-center text-lg'>{slots.length} {slots.length > 1 ? "spaces" : "space"} available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn text-white bg-gradient-to-r from-secondary to-primary border-0 modal-button" disabled={slots.length === 0}>Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;