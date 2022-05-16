import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth)
    const { name, slots } = treatment;
    const formatDate = format(date, 'PP');
    const handleModalForm = (e) => {
        e.preventDefault()
        const slot = e.target.slot.value;
        const patient = user.displayName;
        const email = user.email;
        const phone = e.target.phone.value;
        const booking = {
            treatment: name, patient, email, phone, date: formatDate, slot
        }

        fetch('https://evening-oasis-06751.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Appointment is saved successfully')
                }
                else {
                    toast.error(`Already have an appointment on ${data.exist.date} at ${data.exist.slot}`)
                }
                refetch()
                setTreatment(null)
            })

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
                            <input type="text" value={formatDate} disabled className="input input-bordered w-full max-w-xs" />
                            <select name='slot' className="select select-bordered w-full max-w-xs">
                                {
                                    slots.map(slot => <option
                                        key={slot._id}
                                    >{slot}</option>)
                                }
                            </select>
                            <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" disabled />
                            <input type="email" value={user?.email} className="input input-bordered w-full max-w-xs" disabled />
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