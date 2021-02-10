import React from 'react'
import Lottie  from 'react-lottie'
import animationData from './logistic.json'

const Logistic = ({ isDesktop }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  };

  return (
    <Lottie
      options={defaultOptions}
      width={isDesktop ? '90%' : '60%'}
    />   
  );
}

export default Logistic;