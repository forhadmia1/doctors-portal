import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleModalForm = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        console.log(slot, name, date, email, phone)
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-4 top-5">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <div className='mt-4'>
                        <form onSubmit={handleModalForm} className='grid grid-cols-1 justify-items-center gap-4'>
                            <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                {
                                    slots.map(slot => <option>{slot}</option>)
                                }
                            </select>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" required />
                            <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" required />
                            <input type="tel" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs" required />
                            <input type="submit" value={'Submit'} className="btn btn-accent w-full max-w-xs" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;