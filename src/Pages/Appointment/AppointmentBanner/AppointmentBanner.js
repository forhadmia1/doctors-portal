import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <section>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={chair} class="md:max-w-lg w-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            showOutsideDays
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AppointmentBanner;