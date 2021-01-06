import React from 'react';
import Lottie  from 'react-lottie';
import animationData from './games.json';

const Games = () => {
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

export default Games;