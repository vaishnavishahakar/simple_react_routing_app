import React from 'react';
import Navbar from '../../components/Navbar';
import ContactImg from './../Contact/Contact us.png';

function Contact() {
  return (
    <div>
      <Navbar />
      <h1 className='page-title'>Contact</h1>
      <img src={ContactImg} className='header-image'/>
    </div>
  );
}

export default Contact;
