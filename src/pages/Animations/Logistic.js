import React from 'react';
import Lottie  from 'react-lottie';
import animationData from './logistic.json';

const Logistic = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
      width='250px'
      height='250px'
      style={{marginTop:'115px'}}
    />   
  );
}

export default Logistic;