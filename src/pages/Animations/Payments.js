import React from 'react';
import Lottie  from 'react-lottie';
import animationData from './payments.json';

const Payments = () => {
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

export default Payments;