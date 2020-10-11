import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root');
const AppointmentForm = ({modalIsOpen,closeModal, appointmentOn }) => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div>
           
        <Modal
          isOpen={modalIsOpen}
         
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 className="text-brand text-center"> {appointmentOn}</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="example" defaultValue="test" ref={register} />
      <br/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="exampleRequired" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>
      <input className="btn-brand" type="submit" />
    </form>
        </Modal>
        </div>
    );
};

export default AppointmentForm;