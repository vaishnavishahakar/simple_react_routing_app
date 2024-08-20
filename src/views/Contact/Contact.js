import React from 'react';
import Navbar from '../../components/Navbar';
import ContactImg from './../About/About us.png';

function Contact() {
  <Navbar/>
  return (
    <div>
      <h1 className='page-title'>Contact</h1>
      <img src={ContactImg} className='header-image' />
    </div>
  );
}

export default Contact;
