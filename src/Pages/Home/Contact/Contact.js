import React from 'react';
import ButtonPrimary from '../../Shared/ButtonPrimary';

const Contact = () => {
    return (
        <section className='bg-[url("/src/assets/images/appointment.png")] py-16'>
            <div>
                <h3 className='text-center text-secondary text-xl font-semibold'>Contact Us</h3>
                <h2 className='text-3xl text-center text-white'>Stay Connected With Us</h2>
            </div>
            <div className='mt-10 md:w-1/3 mx-auto w-full p-4'>
                <form className='flex items-center flex-col gap-5'>
                    <input type="email" placeholder="Email" class="input w-full" />
                    <input type="email" placeholder="Subject" class="input w-full" />
                    <textarea class="textarea w-full" rows={4} placeholder="Message"></textarea>
                    <ButtonPrimary>Submit</ButtonPrimary>
                </form>
            </div>
        </section>
    );
};

export default Contact;