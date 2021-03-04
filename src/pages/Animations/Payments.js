import React from 'react'
import Lottie  from 'react-lottie'
import animationData from './payments.json'

const Payments = ({ isDesktop }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
      width={isDesktop ? '70%' : '100%'}
      height={isDesktop ? '100%' : '100%'}
    />
  );
}

export default Payments;