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
    //style = {{backgroundColor: '#0000ff', transform: 'scale(0.8)'}}
    //style = {{backgroundColor: '#0000ff'}}
      options={defaultOptions}
    />   
  );
}

export default Logistic;