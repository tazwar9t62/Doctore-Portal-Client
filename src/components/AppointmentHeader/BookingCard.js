import React from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking}) => {
    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
 
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div className="col-md-4 mb-5">
            <div className="card p-3 border-0">
                <div className="card-body text-center shadow">
                <h5 className="card-title text-brand">{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p>{booking.totalSpace} SPACES AVAILABLE</p>
                <button onClick={openModal} className="btn btn-brand text-white text-uppercase">book appointment</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} />
                </div>
            </div>
            
        </div>
    );
};

export default BookingCard;