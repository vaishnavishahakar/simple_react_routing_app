import React from 'react';
import Navbar from '../../components/Navbar';
import HomeImg from './../Home/Home.png';

function Home() {
  return (
    <div>
      <Navbar/>
      <h1 className='page-title'>Home</h1>
      <img src={HomeImg} className='header-image' />
    </div>
  );
}

export default Home;
