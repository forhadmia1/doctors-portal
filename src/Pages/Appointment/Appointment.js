import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import BookAppointment from './BookAppointment/BookAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            />
            <BookAppointment
                date={date}
            />
            <Footer />
        </div>
    );
};

export default Appointment;