import React from 'react';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div className="pages contact">
        <h1 className="title">Contact Us</h1>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.6814844253586!2d82.1305771!3d26.754538599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a08b27df9476f%3A0x91cb1f9e97c5635d!2sNEW%20CHILDREN%20ACADEMY!5e0!3m2!1sen!2sin!4v1757140536160!5m2!1sen!2sin"
          width="800"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Contact;
