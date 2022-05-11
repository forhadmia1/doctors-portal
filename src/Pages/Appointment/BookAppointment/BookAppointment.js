import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import BookingModal from '../BookingModal/BookingModal';

const BookAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className='container mx-auto'>
            <h2 className='text-center text-secondary text-xl font-semibold'>Available appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-24'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            />}
        </section>
    );
};

export default BookAppointment;