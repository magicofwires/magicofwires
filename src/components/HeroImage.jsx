import React from 'react';
import mow_logo from '../assets/mow_logo.png';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center'>
      <img 
        src={mow_logo} 
        alt='Magic Of Wires Logo' 
      />
    </div>
  );
};

export default HeroImage;