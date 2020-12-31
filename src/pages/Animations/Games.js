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
    //style = {{backgroundColor: '#0000ff',transform: 'scale(1.2)'}}
    //style = {{backgroundColor: '#0000ff'}}
    options={defaultOptions}
    />        
  );
}

export default Games;