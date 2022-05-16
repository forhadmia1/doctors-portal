import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from '../Service/Service';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const BookAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formatDate = format(date, 'PP');

    const { isLoading, data: services, refetch } = useQuery(['available', formatDate], () =>
        fetch(`https://evening-oasis-06751.herokuapp.com/available?date=${formatDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='container mx-auto'>
            <h2 className='text-center text-secondary text-xl font-semibold'>Available appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-24'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            />}
        </section>
    );
};

export default BookAppointment;