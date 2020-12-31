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
    />   
  );
}

export default Logistic;