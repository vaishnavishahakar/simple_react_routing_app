import React from 'react';
import Navbar from '../../components/Navbar';
import AboutImg from './../About/About us.png';

function About() {
  return (
    <div>
      <Navbar/>
      <h1 className='page-title'>About</h1>
      <img src={AboutImg} className='header-image' />
    </div>
  );
}

export default About;
