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
      width={isDesktop ? '70%' : '230px'}
      height={isDesktop ? '100%' : '170px'}
    />
  );
}

export default Payments;