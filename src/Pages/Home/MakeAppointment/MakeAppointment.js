import React from 'react';
import MakeAppointmentimg from '../../../assets/images/doctor-small.png'
import ButtonPrimary from '../../Shared/ButtonPrimary';

const MakeAppointment = () => {
    return (
        <div className="hero bg-[url('/src/assets/images/appointment.png')] px-4 py-16 md:p-0">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 p-0">
                <div>
                    <img className='mt-[-100px] hidden md:block' src={MakeAppointmentimg} alt='' />
                </div>
                <div className='text-white'>
                    <h3 className='text-xl text-secondary'>Appointment</h3>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ButtonPrimary>get started</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;