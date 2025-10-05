import React from 'react';
import { FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactAddress = () => {
  return (
    <div className="address">
        <div className="add">
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <p>New Children Academy, Manas Nagar, <br></br>Ayodhya, Uttar Pradesh 224001</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaPhone />
          </div>
          <p>9451729668 <br />9839185647 <br/> 9044961340 <br/> 9151551840</p>
        </div>
        <div className="add">
          <div className="icon">
            <FaLocationArrow />
          </div>
          <p>sutkarsh490@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactAddress